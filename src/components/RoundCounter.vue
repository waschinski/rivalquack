<template>
  <div class="row roundcounter">
    <div id="round">{{ $t("round") }} {{ round }}</div>
    <q-space />
    <div class="card">{{ leftcard }}</div>
    <div class="card">{{ rightcard }}</div>
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
      rightcard: "gamedata/getRightCardName",
    }),
  },
};
</script>
