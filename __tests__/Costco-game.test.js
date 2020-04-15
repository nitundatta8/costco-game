import { Character } from "./../src/characters.js";
import { Game } from "./../src/game-play.js";

describe ('Character', function() {
  let myCharacter;

  beforeEach(() => {
    myCharacter = new Character("Jim", 1, 3);
  });

  test ('verifies that character is created with correct properties', function() {
    expect(myCharacter.name).toEqual("Jim");
    expect(myCharacter.seniority).toEqual(1);
    expect(myCharacter.stressLevel).toEqual(3);
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