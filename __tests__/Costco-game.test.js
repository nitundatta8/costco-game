import { Character } from "./../src/characters.js";
import { Game } from "./../src/game-play.js";

describe ('Character', function() {
  let myGame;

  beforeEach(() => {
    myGame = new Game();
  });

  test ('verifies that pizzaCutter is created with correct properties', function() {
    myGame.addCharacter("Jim", "pizzaCutter");

    expect(myGame.characters[0].name).toEqual("Jim");
    expect(myGame.characters[0].type).toEqual("pizzaCutter");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);
    //expect(myCharacter.stressLevel).toEqual(3);
  });

  test ('verifies that character type chickenCooker is created', function() {
    myGame.addCharacter("Judy", "chickenCooker");
    
    expect(myGame.characters[0].name).toEqual("Judy");
    expect(myGame.characters[0].type).toEqual("chickenCooker");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);

  });

  test('verifies that character type produceStocker is created', function() {
    myGame.addCharacter("Kyle", "produceStocker");

    expect(myGame.characters[0].name).toEqual("Kyle");
    expect(myGame.characters[0].type).toEqual("produceStocker");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);

  });
  
  test('verifies that character type doorPerson is created', function() {
    myGame.addCharacter("Mikey", "doorPerson");
    expect(myGame.characters[0].name).toEqual("Mikey");
    expect(myGame.characters[0].type).toEqual("doorPerson");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test('verifies that character type supervisor is created', function() {
    myGame.addCharacter("Larry", "supervisor");
    expect(myGame.characters[0].name).toEqual("Larry");
    expect(myGame.characters[0].type).toEqual("supervisor");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

  test('verifies that character type manager is created', function() {
    myGame.addCharacter("Ruby", "manager");

    expect(myGame.characters[0].name).toEqual("Ruby");
    expect(myGame.characters[0].type).toEqual("manager");
    expect(myGame.characters[0].seniority).toEqual(2);
    expect(myGame.characters[0].stressLevel).toEqual(4);
    expect(myGame.characters[0].timeOff).toEqual(0);
  });

});