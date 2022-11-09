class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ["Iris"] };
    this.disposition = "Good natured";
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    flowers.forEach((flower) => {
      this.clothes.dresses.push(flower);
    });
  }

  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
      infant.disposition = "Malicious";
      this.humanWards.push(infant)
      if (this.humanWards.length === 3) {
        this.disposition = 'Good natured'
      }
    } else {
      return infant
    }
  }
}

module.exports = Fairy;
