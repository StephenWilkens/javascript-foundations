const Direwolf = require("./direwolf");

class Stark {
  constructor(object) {
    this.name = object.name;
    if (object.area === undefined) {
      this.location = "Winterfell";
    } else {
      this.location = object.area;
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return "Winter is Coming";
    } else {
      return "The North Remembers";
    }
  }

  callDirewolf(name, home) {
    var dw = new Direwolf(name, this.location);
    dw.protect(this);
    return dw;
  }
}

module.exports = Stark;
