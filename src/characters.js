// export class Character {
//   constructor(name, seniority, stressLevel) {
//     this.name = name;
//     this.seniority = seniority;
//     this.stressLevel = stressLevel;
//     this.timeOff = 0;

//   }
// }

export class Character {
  constructor(name) {
    this.name = name;
    this.seniority = 0;
    this.stressLevel = 0;
    this.timeOff = 0;
    this.type = type;
    

  }


//levelUp() {
//  
//}
//
//stressLevel() {
//  
//}
//
//timeOff() {
//  
//}
//
//checkForWin() {
//  
}


export class PizzaCutter extends Character {
  constructor() {
    this.type = 'pizzaCutter';
  }
}

export class ChickenCooker extends Character {
 
}

export class ProduceStocker extends Character {
 
}

export class DoorPerson extends Character {
 
}

export class Supervisor extends Character {
 
}

export class Manager extends Character {
 
}
