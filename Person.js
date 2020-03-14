class Person {//declaring a class

    constructor(name) {//per instructions, name is a string being passed through constructor
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }

    //equipWeapon method weapon as an object being passed 
    equipWeapon(weapon) {
        this.weapon = weapon
    }
    //attack method
    attack(person) {

        person.health = person.health - this.weapon
    }
}