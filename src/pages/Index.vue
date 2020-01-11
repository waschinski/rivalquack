<template>
  <q-page class="flex flex-center">
    <div id="body">
      <rival-header v-if="newGame === true"></rival-header>
      <select-difficulty v-if="newGame === true"></select-difficulty>
      <rival-details v-if="newGame === false"></rival-details>
      <round-counter v-if="newGame === false"></round-counter>
      <round-details v-if="newGame === false"></round-details>
      <round-nav v-if="newGame === false"></round-nav>
    </div>
  </q-page>
</template>

<script>
import RivalHeader from "../components/RivalHeader.vue";
import SelectDifficulty from "../components/SelectDifficulty.vue";
import RivalDetails from "../components/RivalDetails.vue";
import RoundCounter from "../components/RoundCounter.vue";
import RoundDetails from "../components/RoundDetails.vue";
import RoundNav from "../components/RoundNav.vue";
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  components: {
    RivalHeader,
    SelectDifficulty,
    RivalDetails,
    RoundCounter,
    RoundDetails,
    RoundNav
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      difficultyLevel: "gamedata/getDifficultyLevel",
      newGame: "gamedata/startNewGame"
    })
  },
  created() {
    this.$root.$on("nextButtonClicked", this.nextRound);
  },
  beforeDestroy() {
    this.$root.$off("nextButtonClicked", this.nextRound);
  },
  methods: {
    nextRound() {
      this.$store.commit("gamedata/endRound");
      if (this.round < 9) {
        this.$store.commit("gamedata/setRound", this.round + 1);
      } else {
        this.$store.commit("gamedata/finishGame");
      }
    }
  }
};
</script>
