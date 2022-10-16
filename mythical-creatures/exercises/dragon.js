class Dragon {
    constructor(name, rider) {
        this.name = name
        this.rider = rider
        this.eatCount = 0
        if (this.eatCount >= 3) {
            this.hungry = false;
        }
        else {
            this.hungry = true;
        }
    }

    greet() {
        return `Hi, ${this.rider}!`
    }

    eat() {
        this.eatCount += 1
        console.log(this.eatCount)
        console.log(this.hungry)
    }
}

module.exports = Dragon
