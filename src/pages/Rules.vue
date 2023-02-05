<template>
  <q-page
    class="q-pa-sm app-page"
    style="background-image: url('parchment.png');"
  >
    <div class="body">
      <div class="title">
        {{ $t("solorules") }}
      </div>
      <p />
      <div class="text-bold">
        {{ $t("setup") }}
      </div>
      <p>
        {{ $t("setupparagraph") }}
      </p>
      <div class="text-bold">
        {{ $t("howtoplay") }}
      </div>
      <ol>
        <li>
          {{ $t("howtofortuneteller") }}
        </li>
        <li>
          {{ $t("howtorattails") }}
        </li>
        <li>
          {{ $t("howtobrew") }}
        </li>
        <li>
          {{ $t("evaluationphase") }}
          <ol type="a">
            <li>
              {{ $t("evalbonusdie") }}
            </li>
            <li>
              {{ $t("evalblackchips") }}
            </li>
            <li>
              {{ $t("evalrubies") }}
            </li>
            <li>
              {{ $t("evalscorepoints") }}
            </li>
            <li>
              {{ $t("evalbuyingredients") }}
            </li>
            <li>
              {{ $t("evalspendrubies") }}
            </li>
          </ol>
        </li>
        <li>
          {{ $t("howtoresetratstone") }}
        </li>
        <li>
          {{ $t("howtoendround") }}
        </li>
      </ol>
      <div class="text-bold">
        {{ $t("endofgame") }}
      </div>
      <p>
        {{ $t("howtoendgame") }}
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "RulesPage",
  components: {},
}
</script>
