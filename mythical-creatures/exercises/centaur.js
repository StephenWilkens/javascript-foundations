class Centaur {
  constructor(object) {
    this.name = object.name;
    this.breed = object.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0;
  }

  shootBow() {
    if (this.actionCount < 3 && this.standing === true) {
      this.actionCount++;
      if (this.actionCount >= 3) {
        this.cranky = true;
      }
      return "Twang!!!";
    } else {
      return "NO!";
    }
  }

  run() {
    if (this.actionCount < 3 && this.standing === true) {
      this.actionCount++;
      if (this.actionCount >= 3) {
        this.cranky = true;
      }
      return "Clop clop clop clop!!!";
    } else {
      this.cranky = true;
      return "NO!";
    }
  }

  sleep() {
    if (this.standing === true) {
      return "NO!";
    } else {
      this.actionCount = 0;
      this.cranky = false;
      return "ZZZZ";
    }
  }

  layDown() {
    if (this.standing === true) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.layingDown === true) {
      this.layingDown = false;
      this.standing = true;
    }
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
