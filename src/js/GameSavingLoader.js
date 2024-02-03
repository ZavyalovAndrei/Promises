import json from "./parser.js";
import read from "./reader.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
  static load() {
    let loadData = null;
    read()
      .then((readValue) => {
        return json(readValue);
      })
      .then((parsedData) => {
        const obj = JSON.parse(parsedData);
        return new GameSaving(
          obj.id,
          obj.created,
          obj.userInfo.id,
          obj.userInfo.name,
          obj.userInfo.level,
          obj.userInfo.points
        );
      })
      .then((value) => {
        loadData = value;
      });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(loadData);
      }, 1600);
    });
  }
}
