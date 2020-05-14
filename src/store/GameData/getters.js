export function getVictoryPoints(state) {
  return state.victoryPoints;
}

export function getDifficultyLevel(state) {
  return state.difficultyLevel;
}

export function getRubies(state) {
  return state.rubies;
}

export function getDropletPosition(state) {
  return state.dropletPosition;
}

export function getRound(state) {
  return state.round;
}

export function getCurrentRoundData(state) {
  return state.currentRoundData;
}

export function getCurrentRatstonePos(state) {
  const leftCardDataObj = state.cardData.find(
      (data) => data.level === state.difficultyLevel
    ),
    leftCardData = leftCardDataObj.cards.find(
      (data) => data.id === "L" + state.currentRoundLeftCard
    ),
    rats = leftCardData.ratstone;
  return state.dropletPosition + rats;
}

export function getCurrentBlackChips(state) {
  const rightCardDataObj = state.cardData.find(
      (data) => data.level === state.difficultyLevel
    ),
    rightCardData = rightCardDataObj.cards.find(
      (data) => data.id === "R" + state.currentRoundRightCard
    ),
    blackchips = rightCardData.blackchips;
  return blackchips;
}

export function isGameOver(state) {
  return state.gameOver;
}

export function startNewGame(state) {
  return state.newGame;
}

export function getLeftCardName(state) {
  return "L" + state.currentRoundLeftCard;
}

export function getRightCardName(state) {
  return "R" + state.currentRoundRightCard;
}
