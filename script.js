const playButton = document.getElementById("playBtn");

playButton.addEventListener("click", function () {

    //prompt players for name of Hero and Villain
    let heroName = prompt("Please enter hero name", "Black Panther");
    let villainName = prompt("Please enter villain name", "Bantam");

    //creating new hero/villain and render to screen
    let playerHero = new Hero(heroName);//using Hero.js properties 
    let playerVillain = new Villain(villainName);//using Villain.js properties

    //assigning player their weapon
    playerHero.equipWeapon(new Weapon("Sword"));//using equipWeapon method on Person.js
    playerVillain.equipWeapon(new Weapon("Bow & Arrow"));//using equipWeapon method on Person.js

    //rendering html for HERO
    let renderHero = document.getElementById("heroName");
    renderHero.innerHTML = playerHero.renderH();
    //rendering html for VILLAIN
    let renderVillain = document.getElementById("villainName");
    renderVillain.innerHTML = playerVillain.renderV();
    //---------------------------------------------------------------------------------------------//
    //CONTINUE OR STOP GAME DECISION MAKER
    let checkHeroHealth = document.getElementById("heroHealth");
    let checkVillainHealth = document.getElementById("villainHeatlh");

    let villainAttackBtn = document.getElementById("villainButton");
    villainAttackBtn.addEventListener("click", function () {
        playerHero.attack(playerVillain);
        if (playerVillain.health <= 0) {
            alert("Game Over:Hero Won!!");
        }
        checkVillainHealth.innerHTML = playerVillain.health
    });

    let heroAttackBtn = document.getElementById("heroButton");
    heroAttackBtn.addEventListener("click", function () {
        playerVillain.attack(playerHero);
        if (playerHero.health <= 0) {
            alert("Game Over:Villain Won!!");
        }
        checkHeroHealth.innerHTML = playerHero.health


    });


});