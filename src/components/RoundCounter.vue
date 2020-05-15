<template>
  <div class="round">
    <img :src="'statics/round_' + round + '.png'" style="width: 80px;" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "RoundCounter",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      round: "gamedata/getRound",
    }),
  },
}
</script>
