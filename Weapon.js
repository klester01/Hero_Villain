class Weapon {

    constructor(name) {

        this.name = name;
        this.damage = Math.floor(Math.random() * 10 + 10)//random function that rounds down to whole number and 
        //adding 10 since are looking for random numbers between 10-20
    }
}