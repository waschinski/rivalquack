<template>
  <div>
    <div class="difficulty select">
      {{ $t("selectlevel") }}
    </div>
    <div class="row justify-center">
      <div
        class="difficulty level"
        @click="setDifficulty(1)"
      >
        I
      </div>
      <div
        class="difficulty level"
        @click="setDifficulty(2)"
      >
        II
      </div>
      <div
        class="difficulty level"
        @click="setDifficulty(3)"
      >
        III
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDifficulty",
  data() {
    return {}
  },
  methods: {
    setDifficulty: function (difficultyLevel) {
      this.$store.commit("gamedata/setDifficultyLevel", difficultyLevel)
      this.$store.commit("gamedata/startGame")
    },
  },
}
</script>
