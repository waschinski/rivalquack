<template>
  <div>
    <div class="row">
      <div id="victorypoints">{{ $t("vp") }}: {{ victoryPoints }}</div>
      <q-space />
      <div class="difficulty" id="difficultylevel">
        {{ $t("level") }} {{ fancyLevel }}
      </div>
    </div>
    <div class="row">
      <div class="rubies">{{ fancyRubies }}</div>
      <q-space />
      <div id="droplet">{{ $t("droplet") }} @ {{ dropletPosition }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RivalDetails",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      victoryPoints: "gamedata/getVictoryPoints",
      difficultyLevel: "gamedata/getDifficultyLevel",
      rubies: "gamedata/getRubies",
      dropletPosition: "gamedata/getDropletPosition"
    }),
    fancyRubies: function() {
      let rubiesStr = "",
        rubies = this.rubies;
      for (let index = 0; index < rubies; index++) {
        rubiesStr += "*";
      }
      return rubiesStr;
    },
    fancyLevel: function() {
      return "I".repeat(this.difficultyLevel);
    }
  }
};
</script>
