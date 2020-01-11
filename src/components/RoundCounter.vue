<template>
  <div class="row" id="roundcounter">
    <div id="leftcard">{{ leftcard }}</div>
    <q-space />
    <div id="">{{ $t("round") }}: {{ round }}</div>
    <q-space />
    <div id="rightcard">{{ rightcard }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RoundCounter",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
      leftcard: "gamedata/getLeftCardName",
      rightcard: "gamedata/getRightCardName"
    })
  }
};
</script>
