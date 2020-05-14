<template>
  <div style="width: 100%;">
    <div class="row">
      <div class="victorypoints">{{ $t("vp") }}: {{ victoryPoints }}</div>
      <q-space />
      <q-icon
        name="fas fa-gem"
        v-for="n in rubies"
        v-bind:key="n"
        class="ruby text-red"
        style="margin-top: 4px;"
      />
      <q-space />
      <div class="difficulty difficultylevel">
        {{ $t("level") }}
        <span class="levelsmall">{{ fancyLevel }}</span>
      </div>
    </div>
    <div class="row">
      <q-space />
      <div class="droplet">{{ $t("droplet") }} @ {{ dropletPosition }}</div>
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
      dropletPosition: "gamedata/getDropletPosition",
      rubies: "gamedata/getRubies",
    }),
    fancyLevel: function () {
      return "I".repeat(this.difficultyLevel);
    },
  },
};
</script>
