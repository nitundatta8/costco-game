// export class Character {
//   constructor(name, seniority, stressLevel) {
//     this.name = name;
//     this.seniority = seniority;
//     this.stressLevel = stressLevel;
//     this.timeOff = 0;

//   }
// }

export class Character {
  constructor(name, type) {
    this.name = name;
    this.seniority = 0;
    this.stressLevel = 0;
    this.timeOff = 0;
    this.type = type;
    //this.assets = ["smile", "polite", "smell good", "funny", "weird laugh", "poor social skills", "always late", "no coping skills", "angry"];
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
  constructor(name, type) {
    super(name, type);
    this.seniority = 2;
    this.stressLevel = 4;

  }
}

export class ChickenCooker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 1;
    this.stressLevel = 4;
  }
}

export class ProduceStocker extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 2;
    this.stressLevel = 4;
  }
}

export class DoorPerson extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 2;
    this.stressLevel = 4;
  }
}

export class Supervisor extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 5;
  }
}

export class Manager extends Character {
  constructor(name, type) {
    super(name, type);
    this.seniority = 7;
  }
}
