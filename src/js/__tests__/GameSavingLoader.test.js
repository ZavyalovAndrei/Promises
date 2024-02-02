import GameSavingLoader from "../GameSavingLoader.js";
import GameSaving from "../GameSaving.js";

test("should return a GameSaving object", async () => {
  const expected = new GameSaving(9, 1546300800, 1, "Hitman", 10, 2000);

  const result = GameSavingLoader.load();

  await expect(result).resolves.toEqual(expected);
});
