<template>
  <div>
    <div class="row">
      <div class="blackchips">{{ "&bull;".repeat(currentBlackChips) }}</div>
      <q-space />
      <div id="ratstone">{{ $t("ratstone") }} @ {{ currentRatstonePos }}</div>
    </div>
    <div class="column">
      <div id="rattails">{{ $t("addrattails") }}: {{ rattails }}</div>
      <div class="q-px-md">
        <q-slider
          v-model="rattails"
          markers
          :min="0"
          :max="9"
          v-on:change="setcauldronposition"
        />
      </div>
      <div id="beatthat">{{ $t("beatrival") }}</div>
      <div id="cauldronspace">
        <div class="column">
          <div id="score">{{ $t("score") }}: {{ currentRoundData.score }}</div>
        </div>
        <div class="row">
          <div id="vp">{{ $t("vp") }}: {{ currentRoundData.vp }}</div>
          <q-space />
          <div class="rubies" v-if="currentRoundData.ruby === true">*</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RoundDetails",
  data() {
    return {
      rattails: 0
    };
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      currentRoundData: "gamedata/getCurrentRoundData",
      currentRatstonePos: "gamedata/getCurrentRatstonePos",
      currentBlackChips: "gamedata/getCurrentBlackChips"
    })
  },
  mounted: function() {
    this.$nextTick(function() {
      this.rattails = 0;
      this.setcauldronposition();
    });
  },
  watch: {
    round: function() {
      this.rattails = 0;
      this.setcauldronposition();
    }
  },
  methods: {
    setcauldronposition: function() {
      this.$store.commit("gamedata/setCurrentRoundData", this.rattails);
    }
  }
};
</script>
