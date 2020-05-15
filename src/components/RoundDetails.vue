<template>
  <div>
    <div class="magnifier">
      <img src="statics/magnifier.png" style="width: 240px;" />
    </div>
    <div class="space">
      <img
        class="space"
        :src="'statics/space_' + currentRoundData.id + '.png'"
        style="width: 116px;"
      />
    </div>
    <div class="column">
      <div id="rattails">{{ $t("addrattails") }}: {{ rattails }}</div>
      <div class="q-px-md">
        <q-slider
          v-model="rattails"
          markers
          :min="0"
          :max="5"
          v-on:change="setcauldronposition"
          style="width: 240px;"
        />
      </div>
    </div>
    <div id="beatthat">{{ $t("beatrival") }}</div>
    <div class="blackchip1">
      <img src="statics/blackchip.png" v-if="currentBlackChips > 0" />
    </div>
    <div class="blackchip2">
      <img src="statics/blackchip.png" v-if="currentBlackChips > 1" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "RoundDetails",
  data() {
    return {
      rattails: 0,
    }
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      currentRoundData: "gamedata/getCurrentRoundData",
      currentRatstonePos: "gamedata/getCurrentRatstonePos",
      currentBlackChips: "gamedata/getCurrentBlackChips",
    }),
  },
  mounted: function () {
    this.$nextTick(function () {
      this.rattails = 0
      this.setcauldronposition()
    })
  },
  watch: {
    round: function () {
      this.rattails = 0
      this.setcauldronposition()
    },
  },
  methods: {
    setcauldronposition: function () {
      this.$store.commit("gamedata/setCurrentRoundData", this.rattails)
    },
  },
}
</script>
