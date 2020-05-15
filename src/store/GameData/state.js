export default function () {
  return {
    gameOver: true,
    newGame: true,
    victoryPoints: 0,
    difficultyLevel: 1,
    rubies: 0,
    dropletPosition: 0,
    round: 0,
    currentRoundData: {},
    currentRoundLeftCard: 0,
    currentRoundRightCard: 0,
    cardOrder: [],
    cardData: [
      {
        level: 1,
        cards: [
          {
            id: "L1",
            ratstone: 6,
          },
          {
            id: "L2",
            ratstone: 7,
          },
          {
            id: "L3",
            ratstone: 8,
          },
          {
            id: "L4",
            ratstone: 6,
          },
          {
            id: "L5",
            ratstone: 7,
          },
          {
            id: "L6",
            ratstone: 8,
          },
          {
            id: "L7",
            ratstone: 8,
          },
          {
            id: "L8",
            ratstone: 7,
          },
          {
            id: "L9",
            ratstone: 9,
          },
          {
            id: "R1",
            blackchips: 0,
            droplet: 1,
          },
          {
            id: "R2",
            blackchips: 0,
            droplet: 2,
          },
          {
            id: "R3",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R4",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R5",
            blackchips: 1,
            droplet: 2,
          },
          {
            id: "R6",
            blackchips: 1,
            droplet: 2,
          },
          {
            id: "R7",
            blackchips: 2,
            droplet: 3,
          },
          {
            id: "R8",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R9",
            blackchips: 1,
            droplet: 4,
          },
        ],
      },
      {
        level: 2,
        cards: [
          {
            id: "L1",
            ratstone: 7,
          },
          {
            id: "L2",
            ratstone: 8,
          },
          {
            id: "L3",
            ratstone: 9,
          },
          {
            id: "L4",
            ratstone: 8,
          },
          {
            id: "L5",
            ratstone: 9,
          },
          {
            id: "L6",
            ratstone: 10,
          },
          {
            id: "L7",
            ratstone: 9,
          },
          {
            id: "L8",
            ratstone: 10,
          },
          {
            id: "L9",
            ratstone: 11,
          },
          {
            id: "R1",
            blackchips: 0,
            droplet: 2,
          },
          {
            id: "R2",
            blackchips: 2,
            droplet: 3,
          },
          {
            id: "R3",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R4",
            blackchips: 1,
            droplet: 3,
          },
          {
            id: "R5",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R6",
            blackchips: 1,
            droplet: 3,
          },
          {
            id: "R7",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R8",
            blackchips: 1,
            droplet: 3,
          },
          {
            id: "R9",
            blackchips: 1,
            droplet: 4,
          },
        ],
      },
      {
        level: 3,
        cards: [
          {
            id: "L1",
            ratstone: 8,
          },
          {
            id: "L2",
            ratstone: 9,
          },
          {
            id: "L3",
            ratstone: 10,
          },
          {
            id: "L4",
            ratstone: 10,
          },
          {
            id: "L5",
            ratstone: 11,
          },
          {
            id: "L6",
            ratstone: 12,
          },
          {
            id: "L7",
            ratstone: 12,
          },
          {
            id: "L8",
            ratstone: 11,
          },
          {
            id: "L9",
            ratstone: 12,
          },
          {
            id: "R1",
            blackchips: 2,
            droplet: 2,
          },
          {
            id: "R2",
            blackchips: 0,
            droplet: 3,
          },
          {
            id: "R3",
            blackchips: 1,
            droplet: 3,
          },
          {
            id: "R4",
            blackchips: 1,
            droplet: 4,
          },
          {
            id: "R5",
            blackchips: 1,
            droplet: 3,
          },
          {
            id: "R6",
            blackchips: 1,
            droplet: 4,
          },
          {
            id: "R7",
            blackchips: 1,
            droplet: 4,
          },
          {
            id: "R8",
            blackchips: 0,
            droplet: 4,
          },
          {
            id: "R9",
            blackchips: 0,
            droplet: 5,
          },
        ],
      },
    ],
    cauldronData: [
      {
        id: 0,
        score: 0,
        vp: 0,
        ruby: false,
      },
      {
        id: 1,
        score: 1,
        vp: 0,
        ruby: false,
      },
      {
        id: 2,
        score: 2,
        vp: 0,
        ruby: false,
      },
      {
        id: 3,
        score: 3,
        vp: 0,
        ruby: false,
      },
      {
        id: 4,
        score: 4,
        vp: 0,
        ruby: false,
      },
      {
        id: 5,
        score: 5,
        vp: 0,
        ruby: true,
      },
      {
        id: 6,
        score: 6,
        vp: 1,
        ruby: false,
      },
      {
        id: 7,
        score: 7,
        vp: 1,
        ruby: false,
      },
      {
        id: 8,
        score: 8,
        vp: 1,
        ruby: false,
      },
      {
        id: 9,
        score: 9,
        vp: 1,
        ruby: true,
      },
      {
        id: 10,
        score: 10,
        vp: 2,
        ruby: false,
      },
      {
        id: 11,
        score: 11,
        vp: 2,
        ruby: false,
      },
      {
        id: 12,
        score: 12,
        vp: 2,
        ruby: false,
      },
      {
        id: 13,
        score: 13,
        vp: 2,
        ruby: true,
      },
      {
        id: 14,
        score: 14,
        vp: 3,
        ruby: false,
      },
      {
        id: 15,
        score: 15,
        vp: 3,
        ruby: false,
      },
      {
        id: 16,
        score: 15,
        vp: 3,
        ruby: true,
      },
      {
        id: 17,
        score: 16,
        vp: 3,
        ruby: false,
      },
      {
        id: 18,
        score: 16,
        vp: 4,
        ruby: false,
      },
      {
        id: 19,
        score: 17,
        vp: 4,
        ruby: false,
      },
      {
        id: 20,
        score: 17,
        vp: 4,
        ruby: true,
      },
      {
        id: 21,
        score: 18,
        vp: 4,
        ruby: false,
      },
      {
        id: 22,
        score: 18,
        vp: 5,
        ruby: false,
      },
      {
        id: 23,
        score: 19,
        vp: 5,
        ruby: false,
      },
      {
        id: 24,
        score: 19,
        vp: 5,
        ruby: true,
      },
      {
        id: 25,
        score: 20,
        vp: 5,
        ruby: false,
      },
      {
        id: 26,
        score: 20,
        vp: 6,
        ruby: false,
      },
      {
        id: 27,
        score: 21,
        vp: 6,
        ruby: false,
      },
      {
        id: 28,
        score: 21,
        vp: 6,
        ruby: true,
      },
      {
        id: 29,
        score: 22,
        vp: 7,
        ruby: false,
      },
      {
        id: 30,
        score: 22,
        vp: 7,
        ruby: true,
      },
      {
        id: 31,
        score: 23,
        vp: 7,
        ruby: false,
      },
      {
        id: 32,
        score: 23,
        vp: 8,
        ruby: false,
      },
      {
        id: 33,
        score: 24,
        vp: 8,
        ruby: false,
      },
      {
        id: 34,
        score: 24,
        vp: 8,
        ruby: true,
      },
      {
        id: 35,
        score: 25,
        vp: 9,
        ruby: false,
      },
      {
        id: 36,
        score: 25,
        vp: 9,
        ruby: true,
      },
      {
        id: 37,
        score: 26,
        vp: 9,
        ruby: false,
      },
      {
        id: 38,
        score: 26,
        vp: 10,
        ruby: false,
      },
      {
        id: 39,
        score: 27,
        vp: 10,
        ruby: false,
      },
      {
        id: 40,
        score: 27,
        vp: 10,
        ruby: true,
      },
      {
        id: 41,
        score: 28,
        vp: 11,
        ruby: false,
      },
      {
        id: 42,
        score: 28,
        vp: 11,
        ruby: true,
      },
      {
        id: 43,
        score: 29,
        vp: 11,
        ruby: false,
      },
      {
        id: 44,
        score: 29,
        vp: 12,
        ruby: false,
      },
      {
        id: 45,
        score: 30,
        vp: 12,
        ruby: false,
      },
      {
        id: 46,
        score: 30,
        vp: 12,
        ruby: true,
      },
      {
        id: 47,
        score: 31,
        vp: 12,
        ruby: false,
      },
      {
        id: 48,
        score: 31,
        vp: 13,
        ruby: false,
      },
      {
        id: 49,
        score: 32,
        vp: 13,
        ruby: false,
      },
      {
        id: 50,
        score: 32,
        vp: 13,
        ruby: true,
      },
      {
        id: 51,
        score: 33,
        vp: 14,
        ruby: false,
      },
      {
        id: 52,
        score: 33,
        vp: 14,
        ruby: true,
      },
      {
        id: 53,
        score: 35,
        vp: 15,
        ruby: false,
      },
    ],
  }
}
