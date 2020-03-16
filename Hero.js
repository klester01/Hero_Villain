class Hero extends Person {
    constructor(name) {
        super(name);
    }

    renderH() {
        return `
        <img src="image/black-panther-hero.jpg" alt="Black Panther"> 
        <div id="heroName">${this.name}</div>
        <span>Health:</span>
        <div id="heroHealth">${this.health}</div>
        <span>Weapon:</span>
        <div id="heroWeapon">${this.weapon.name}</div>
        <p><button class"btn btn-danger" id="heroButton">Hero Attack!</button></p> 
    `

    }

}


