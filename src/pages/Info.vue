<template>
  <q-page class="q-pa-sm app-page">
    <div class="body">
      <div class="title">{{ $t("info") }}</div>
      <p></p>
      <p>
        {{ $t("variantby") }}
        <a
          href="https://www.boardgamegeek.com/filepage/174678/solo-variant"
          target="_blank"
          >Marek Tupy</a
        >
        {{ $t("quacksby") }}
        <a
          href="https://www.boardgamegeek.com/boardgamedesigner/80162/wolfgang-warsch"
          target="_blank"
          >Wolfgang Warsch</a
        >.
      </p>
      <p>
        {{ $t("implementedby") }}
        <a href="https://www.boardgamegeek.com/user/Naitakal" target="_blank"
          >Andreas Waschinski</a
        >.
      </p>
      <p>
        {{ $t("github") }}:
        <a href="https://github.com/waschinski/rivalquack" target="_blank"
          >https://github.com/waschinski/rivalquack</a
        >
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "InfoPage",
  components: {},
};
</script>
