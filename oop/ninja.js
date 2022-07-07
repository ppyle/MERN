class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`my name is ${this.name}`)
    }
    showStats(){
        console.log(`my strength is ${this.strength}. my speed is ${this.speed} and my health is ${this.health}`)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name, health){
        super(name, health)
        this.wisdom = 10
    }
    speakWisodom(){
        console.log("never trust a fart");
        this.drinkSake();

    }
}

// n1 = new Ninja("jin", 100)
// console.log(n1)
// n1.drinkSake()
// n1.showStats()

const s1 = new Sensei("Master Kenobi", 200)
s1.speakWisodom()
s1.showStats()
