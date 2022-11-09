class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home === undefined) {
      this.home = "Beyond the Wall";
    } else {
      this.home = home;
    }
    if (size === undefined) {
      this.size = "Massive";
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    const index = this.starksToProtect.indexOf(stark);
    if (index > -1) {
      this.starksToProtect.splice(index, 1);
    }
    stark.safe = false;
    if (this.starksToProtect.length === 0) {
      this.huntsWhiteWalkers = true;
    }
  }
}

module.exports = Direwolf;
