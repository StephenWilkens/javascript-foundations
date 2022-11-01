var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      victim = new Statue(victim.name);
      this.statues.push(victim);
    } else {
      victim = new Statue(victim.name);
      this.statues.push(victim);
      var person = this.statues.shift();
      var person = new Person(person.name)
      person.mood = 'relieved'
      return person
    }
  }
}

module.exports = Medusa;
