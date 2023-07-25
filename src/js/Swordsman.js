import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.checkType(this.type)
    this.attack = 40;
    this.defense = 10;
  }
}
