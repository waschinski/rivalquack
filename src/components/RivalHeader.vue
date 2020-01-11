<template>
  <div id="header">
    <div id="title1">{{ $t("titleline1") }}</div>
    <div id="title2">{{ $t("titleline2") }}</div>
    <div id="subtitle">
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
      >
      {{ $t("implementedby") }}
      <a href="https://www.boardgamegeek.com/user/Naitakal" target="_blank"
        >Andreas Waschinski</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RivalHeader",
  data() {
    return {};
  }
};
</script>
