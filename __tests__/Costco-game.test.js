import { Character } from "./../src/characters.js";
import { Game } from "./../src/game-play.js";

describe ('Character', function() {
  let myGame;

  beforeEach(() => {
    myGame = new Game();
  });

  test ('verifies that character is created with correct properties', function() {
    myGame.addCharacter("Jim", "pizzaCutter");

    expect(myGame.characters[0].name).toEqual("Jim");
    expect(myGame.characters[0].type).toEqual("pizzaCutter");
    //expect(myCharacter.stressLevel).toEqual(3);
  });

  test ('verifies that character type chickenCooker is created', function() {
  
  });

  test('verifies that character type produceStocker is created', function() {

  });
  
  test('verifies that character type doorPerson is created', function() {

  });

  test('verifies that character pizzaCutter is created', function() {
  
  });

  test('verifies that character type produceStocker is created', function() {

  });

  test('verifies that character type supervisor is created', function() {

  });

  test('verifies that character type manager is created', function() {

  });

});