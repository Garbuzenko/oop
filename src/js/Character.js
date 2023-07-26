export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
   
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
    }
    this.name = name;

    if (!types.includes(type)){
      throw new Error('Тип задан неверно');
    }
    this.type = type;

    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defense *= 1.2;
  }

  damage(points) {
    if (points < 0) {
      throw new Error('урон не может быть отрицательным');
    }
    this.health -= points*(1-this.defense/100);
    if (this.health < 0){
      this.health = 0;
    }
  }


}
