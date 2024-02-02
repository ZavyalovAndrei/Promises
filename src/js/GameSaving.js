export default class GameSaving {
  constructor(id, created, userInfoId, name, level, points) {
    this.id = id;
    this.created = created;
    this.userInfo = {
      id: userInfoId,
      name: name,
      level: level,
      points: points,
    };
  }
}