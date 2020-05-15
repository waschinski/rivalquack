<template>
  <div style="width: 100%;">
    <div class="row" style="padding: 10px 10px 0 10px;">
      <div class="difficulty difficultylevel">
        {{ $t("level") }}
        <span class="levelsmall">{{ fancyLevel }}</span>
      </div>
    </div>
    <div class="row" style="padding-left: 10px;">
      <div class="victorypoints">{{ $t("vp") }}: {{ victoryPoints }}</div>
    </div>
    <div class="row">
      <q-space />
      <div class="droplet">{{ $t("droplet") }} @ {{ dropletPosition }}</div>
    </div>
    <div class="ruby" v-if="rubies == 1">
      <img src="statics/ruby.png" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "RivalDetails",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      victoryPoints: "gamedata/getVictoryPoints",
      difficultyLevel: "gamedata/getDifficultyLevel",
      dropletPosition: "gamedata/getDropletPosition",
      rubies: "gamedata/getRubies",
    }),
    fancyLevel: function () {
      return "I".repeat(this.difficultyLevel)
    },
  },
}
</script>
