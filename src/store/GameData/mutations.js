export function setDifficultyLevel(state, payload) {
  state.difficultyLevel = payload;
}

export function setVictoryPoints(state, payload) {
  state.victoryPoints = payload;
}

export function setRound(state, payload) {
  state.round = payload;
  state.currentRoundLeftCard = state.cardOrder[payload - 1];
  state.currentRoundRightCard = state.cardOrder[payload];
}

export function setDropletPosition(state, payload) {
  state.dropletPosition = payload;
}

export function setRubies(state, payload) {
  state.rubies = payload;
}

export function setNewGame(state) {
  state.newGame = true;
}

export function setCurrentRoundData(state, payload) {
  const leftCardDataObj = state.cardData.find(
      data => data.level === state.difficultyLevel
    ),
    leftCardData = leftCardDataObj.cards.find(
      data => data.id === "L" + state.currentRoundLeftCard
    ),
    rats = leftCardData.ratstone,
    currentCauldronSpace = state.dropletPosition + rats + payload + 1;
  state.currentRoundData = state.cauldronData.find(
    data => data.id === currentCauldronSpace
  );
}

export function startGame(state) {
  state.currentRoundData = {};
  randomizeCardOrder(state);
  setRound(state, 1);
  setRubies(state, 1);
  setCurrentRoundData(state, 0);
  setVictoryPoints(state, 0);
  setDropletPosition(state, 0);
  state.gameOver = false;
  state.newGame = false;
}

export function randomizeCardOrder(state) {
  // shuffle AI cards
  const cardorder = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    anothercardorder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Durstenfeld shuffle
  for (let i = cardorder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardorder[i], cardorder[j]] = [cardorder[j], cardorder[i]];
  }
  const removeme = cardorder[8],
    index = anothercardorder.indexOf(removeme);
  if (index > -1) {
    anothercardorder.splice(index, 1);
  }
  // Durstenfeld shuffle all cards but the last again
  for (let i = anothercardorder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [anothercardorder[i], anothercardorder[j]] = [
      anothercardorder[j],
      anothercardorder[i]
    ];
  }
  // Draw first card and add to the bottom of the deck
  cardorder.push(anothercardorder[0]);
  state.cardOrder = cardorder;
}

export function endRound(state) {
  // add Ruby if true
  if (state.currentRoundData.ruby === true) {
    state.rubies = state.rubies + 1;
  }

  // spent Rubies if available
  if (state.rubies > 1) {
    if (state.round < 9) {
      state.dropletPosition = state.dropletPosition + 1;
    } else {
      state.victoryPoints = state.victoryPoints + 1;
    }
    state.rubies = state.rubies - 2;
  }

  // move Droplet
  if (state.round < 9) {
    const rightCardDataObj = state.cardData.find(
        data => data.level === state.difficultyLevel
      ),
      rightCardData = rightCardDataObj.cards.find(
        data => data.id === "R" + state.currentRoundRightCard
      ),
      droplet = rightCardData.droplet;
    state.dropletPosition = state.dropletPosition + droplet;
  }

  // add victory points
  state.victoryPoints = state.victoryPoints + state.currentRoundData.vp;
}

export function finishGame(state) {
  // Rival earns points, 1 per 5 score
  const score = state.currentRoundData.score,
    vp = Math.floor(score / 5);
  state.victoryPoints = state.victoryPoints + vp;
  state.gameOver = true;
}
