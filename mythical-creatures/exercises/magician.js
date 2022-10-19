class Magician {
  constructor(obj) {
    this.name = `The Great ${obj.name}`;
    this.assistant = obj.assistant;
    if (obj.clothing === undefined) {
      this.favoriteAccessory = "top hat";
    } else {
      this.favoriteAccessory = obj.clothing;
    }
    this.confidencePercentage = 10;
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }

  performTrick() {
    if (this.favoriteAccessory === "top hat") {
      this.confidencePercentage += 10;
      return "PULL RABBIT FROM TOP HAT";
    } else {
      this.confidencePercentage += 10;
      return "PULL DOVE FROM SLEEVE";
    }
  }

  performShowStopper() {
    if (this.assistant === true && this.confidencePercentage >= 100) {
      return "WOW! The magician totally just sawed that person in half!";
    } else {
      return "Oh no, this trick is not ready!";
    }
  }
}

module.exports = Magician;
