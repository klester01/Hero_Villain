class Villain extends Person {
    constructor(name) {
        super(name);
    }

    renderV() {
        return `
        <img src="image/bantam-3.jpg">
        <div id="villainName">${this.name}</div>
        <span>Health:</span>
            <div id="villainHealth">${this.health}</div>
        <span>Weapon:</span>
            <div id="villainWeapon">${this.weapon.name}</div>
        <p><button class="btn btn-danger" id="villainButton" alt="Bantam">Villain Attack</button></p>
    `

    }

}