//prompt players for name of Hero and Villain
let heroName = prompt("Please enter hero name", "Black Panter");
let villainName = prompt("Please enter villain name", "Bantam");

//creating new hero and render to screen
let playerHero = new Hero(heroName);//using Hero.js properties 
playerHero.equipWeapon(new Weapon("Sword"));//using equipWeapon method on Person.js
let hcontainer = ;



//creating new villain and render to screen
let playerVillain = new Villain(villainName);//using Villain.js properties
playerVillain.equipWeapon(new Weapon("Bow and Arrow"));//using equipWeapon method on Person.js
let vcontainer =;