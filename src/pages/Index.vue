<template>
  <q-page class="q-pa-none app-page">
    <div class="body">
      <div class="rival">
        <img src="rival.png" style="width: 140px;" />
      </div>
      <select-difficulty v-if="newGame === true" />
      <rival-details v-if="newGame === false && gameover === false" />
      <round-counter v-if="newGame === false && gameover === false" />
      <round-details v-if="newGame === false && gameover === false" />
      <round-nav v-if="newGame === false && gameover === false" />
      <results v-if="newGame === false && gameover === true" />
    </div>
  </q-page>
</template>

<script>
import SelectDifficulty from "../components/SelectDifficulty.vue"
import RivalDetails from "../components/RivalDetails.vue"
import RoundCounter from "../components/RoundCounter.vue"
import RoundDetails from "../components/RoundDetails.vue"
import RoundNav from "../components/RoundNav.vue"
import Results from "../components/Results.vue"
import { mapGetters } from "vuex"

export default {
  name: "PageIndex",
  components: {
    SelectDifficulty,
    RivalDetails,
    RoundCounter,
    RoundDetails,
    RoundNav,
    Results,
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      difficultyLevel: "gamedata/getDifficultyLevel",
      newGame: "gamedata/startNewGame",
      gameover: "gamedata/isGameOver",
    }),
  },
  created() {
    this.$root.$on("nextButtonClicked", this.nextRound)
  },
  beforeDestroy() {
    this.$root.$off("nextButtonClicked", this.nextRound)
  },
  methods: {
    nextRound() {
      this.$store.commit("gamedata/endRound")
      if (this.round < 9) {
        this.$store.commit("gamedata/setRound", this.round + 1)
      } else {
        this.$store.commit("gamedata/finishGame")
      }
    },
  },
}
</script>
