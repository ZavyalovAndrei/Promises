import GameSavingLoader from "./js/GameSavingLoader.js";

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log(error);
  }
);
