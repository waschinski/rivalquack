<template>
  <div style="width: 100%">
    <div class="difficulty">{{ $t("endresult") }}</div>
    <div class="row justify-center">
      <div class="difficulty difficultylevel">
        {{ $t("level") }}
        <span class="levelsmall">{{ fancyLevel }}</span>
      </div>
    </div>
    <div class="row justify-center">
      <div class="victorypoints">{{ $t("vp") }}: {{ victoryPoints }}</div>
    </div>
    <div class="roundnav">
      <q-btn
        color="primary"
        class="q-px-md q-py-xs"
        size="md"
        v-on:click="buttonclick"
      >{{ $t('newgame') }}</q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Results",
  data() {
    return {
      label: this.$t("endgame")
    };
  },
  computed: {
    ...mapGetters({
      victoryPoints: "gamedata/getVictoryPoints",
      difficultyLevel: "gamedata/getDifficultyLevel"
    }),
    fancyLevel: function() {
      return "I".repeat(this.difficultyLevel);
    }
  },
  methods: {
    buttonclick() {
      this.$store.commit("gamedata/setNewGame");
    }
  },
};
</script>
