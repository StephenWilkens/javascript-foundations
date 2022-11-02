class Ogre {
  constructor(object) {
    this.name = object.name;
    if (object.abode === undefined) {
      this.home = "Swamp";
    } else {
      this.home = object.abode;
    }
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter != 0 && human.encounterCounter % 3 === 0) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings++;
    if (this.swings > 1) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
