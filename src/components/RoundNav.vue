<template>
  <div id="roundnav">
    <q-btn
      color="primary"
      class="q-px-lg q-py-xs"
      size="lg"
      :label="label"
      v-on:click="buttonclick"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RoundNav",
  data() {
    return {
      label: this.$t("nextround")
    };
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      gameover: "gamedata/isGameOver"
    })
  },
  methods: {
    buttonclick() {
      if (this.gameover === true) {
        this.$store.commit("gamedata/setNewGame");
      } else {
        this.$root.$emit("nextButtonClicked");
      }
    }
  },
  watch: {
    gameover: function(isGameOver) {
      if (isGameOver === true) {
        this.label = this.$t("newgame");
      }
    },
    round: function(newRound) {
      if (newRound === 9) {
        this.label = this.$t("endgame");
      } else {
        this.label = this.$t("nextround");
      }
    }
  }
};
</script>
