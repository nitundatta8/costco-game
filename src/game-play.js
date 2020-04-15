import { Character } from './../src/characters.js';
import { PizzaCutter } from './../src/characters.js';
import { ChickenCooker } from './../src/characters.js';
import { ProduceStocker } from './../src/characters.js';
import { DoorPerson } from './../src/characters.js';
import { Supervisor } from './../src/characters.js';
import { Manager } from './../src/characters.js';

export class Game {
  constructor(){
    //this.possibleCharacters = [];
    this.characters = [];
  }

  addCharacter(name, characterType) {
    if (characterType === 'pizzaCutter'){
      let character = new PizzaCutter(name);
      this.character.push(character);
    } else if (characterType === 'chickenCooker') {
      let character = new ChickenCooker(name);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'produceStocker') {
      let character = new ProduceStocker(name);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'doorPerson') {
      let character = new DoorPerson(name);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'supervisor'){
      let character = new Supervisor(name);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'manager') {
      let character = new Manager(name);
      this.character.push(character);
      return characterType;
    } 

  }

};