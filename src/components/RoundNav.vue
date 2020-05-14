<template>
  <div class="roundnav">
    <q-btn
      color="primary"
      class="q-px-md q-py-xs"
      size="md"
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
      label: this.$t("nextround"),
    };
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
    }),
  },
  methods: {
    buttonclick() {
      this.$root.$emit("nextButtonClicked");
    },
  },
  watch: {
    round: function (newRound) {
      if (newRound === 9) {
        this.label = this.$t("endgame");
      } else {
        this.label = this.$t("nextround");
      }
    },
  },
};
</script>
