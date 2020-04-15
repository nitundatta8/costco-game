import {Character} from './../src/characters.js';

export class Game {
  constructor(){
    this.characters = [];
  }

  addCharacter(name, characterType) {
    if (characterType === 'pizzaCutter'){

    } else if (characterType === 'chickenCooker') {
      let character = new ChickenCooker(name);
      this.characters.push(character);
    } else if (characterType === 'produceStocker') {
      let character = new ProduceStocker(name);
      this.characters.push(character);
    } else if (characterType === 'doorPerson') {
      let character = new DoorPerson(name);
      this.characters.push(character);
    } else if (characterType === 'supervisor'){
      let character = new Supervisor(name);
      this.characters.push(character);
    } else if (characterType === 'manager') {
      let character = new Manager(name);
      this.character.push(character);
    } else {

    }

  }

};