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
      let character = new PizzaCutter(name, characterType);
      this.characters.push(character);
    } else if (characterType === 'chickenCooker') {
      let character = new ChickenCooker(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'produceStocker') {
      let character = new ProduceStocker(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'doorPerson') {
      let character = new DoorPerson(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'supervisor'){
      let character = new Supervisor(name, characterType);
      this.characters.push(character);
      return characterType;
    } else if (characterType === 'manager') {
      let character = new Manager(name, characterType);
      this.characters.push(character);
      return characterType;
    } 

  }

};