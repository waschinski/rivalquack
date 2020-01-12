<template>
  <div>
    <div class="row">
      <div class="blackchips">{{ "&bull;".repeat(currentBlackChips) }}</div>
      <q-space />
      <div class="ratstone">{{ $t("ratstone") }} @ {{ currentRatstonePos }}</div>
    </div>
    <div class="column">
      <div id="rattails">{{ $t("addrattails") }}: {{ rattails }}</div>
      <div class="q-px-md">
        <q-slider v-model="rattails" markers :min="0" :max="9" v-on:change="setcauldronposition" />
      </div>
      <div id="beatthat">{{ $t("beatrival") }}</div>
      <div class="cauldronspace">
        <div class="row">
          <div class="column">
            <div id="score" class="text">{{ $t("score") }}: {{ currentRoundData.score }}</div>
            <div id="vp">{{ $t("vp") }}: {{ currentRoundData.vp }}</div>
          </div>
          <q-space />
          <div class="ruby" v-if="currentRoundData.ruby">
            <img src="statics/ruby.png" class="rubies" />
          </div>
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
