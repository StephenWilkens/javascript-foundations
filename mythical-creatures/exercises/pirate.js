class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job === undefined) {
      this.job = "scallywag";
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    if (this.booty < 500) {
      this.booty += 100;
      return "YAARRR!";
    } else {
      this.cursed = true;
      return "ARG! I've been cursed!";
    }
  }

  liftCurse() {
    if (this.cursed === true) {
      this.cursed = false;
      this.booty -= 300;
      return 'Your curse has been lifted!';
    } else { 
      return "You don't need to lift a curse!"
    }
  }
}

module.exports = Pirate;
