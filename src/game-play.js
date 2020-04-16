import { Character } from './../src/characters.js';
import { PizzaCutter } from './../src/characters.js';
import { ChickenCooker } from './../src/characters.js';
import { ProduceStocker } from './../src/characters.js';
import { DoorPerson } from './../src/characters.js';
import { Supervisor } from './../src/characters.js';
import { Manager } from './../src/characters.js';
import { StoreManager } from './../src/characters.js';

export class Game {
  constructor(){
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
    } else if (characterType === 'storeManager') {
      let character = new StoreManager(name, characterType);
      this.characters.push(character);
      return characterType;
    } 
  }

  startGame(name, characterType){
    this.addCharacter(name, characterType);
    
    this.characters.push(new Supervisor("Devious DJ", "supervisor"));
    this.characters.push(new ChickenCooker("Malevolent Mikah", "chickenCooker"));
    this.characters.push(new Supervisor("Needling Nitun", 'supervisor'));
    this.characters.push(new Manager("Joyless Julia", "manager"));
    this.characters.push(new StoreManager("Juanita", "storeManager"));
  }

  chooseOpponent(){
    let ranNumber = Math.floor(Math.random() * characters.length) + 1;
    let opponent = this.characters[ranNumber];
    return opponent;
  };


};


  export class Battle {
    constructor(user, opponent) {
      this.user=user;
      this.opponent=opponent;
      this.roll = 0;
      this.battleWon = false;
    }
    
    diceRoll(){
      let dicePair = [];
      for (i = 0; i < 2; i++) {
        let ranNumber = Math.floor(Math.random() * 6) + 1;
        dicePair.push(diceNumber);
      }
      return dicePair;
    }
    doBattle(){
      
      // let enemyIndex = chooseOpponent();
      // let name = this.characters[enemyIndex].name;
      // let seniority = this.character[enemyIndex].seniority;
      // let assets = this.character[enemyIndex].seniority;
      let battleWon = false; 
      let roll = diceRoll();
      let diceRoll = roll[0] + roll[1];
      // userPower takes seniority and then adds the modifiers from assets
      let userPower = this.user.seniority + Object.values(this.user.assets[0]) + Object.values(this.user.assets[1]);
      // margin is the equation for determining how much you have to roll to win
      let margin = this.opponent.seniority - userPower + 5;
      // if we modify user stats + opponent stats here, how do we return the outcome to the game?
      // update character and opponent after battle

      if (diceRoll > margin) {
        battleWon = true;
      }
      else {
        battleWon = false;
      }
    }
  
  };
  
    

    // if opponent has 7 seniority and player has 3
    // take opponents seniority, subtract your seniority, then add 5
    // you have to roll that number or higher to win
    // 7 - 3 = 4        4 + 5?? = 9
    // must roll 9 or higher to win
    

  // }

//let ranNumber = Math.floor(Math.random() * 6)+1;