import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

const bowman = new Bowman('Bowman1');
const swordsman = new Swordsman('Swordsman1');
const magician = new Magician('Magician1');
const udead = new Undead('Undead1');
const zombie = new Zombie('Zombie1');
const daemon = new Daemon('Daemon1');

bowman.levelUp();
swordsman.levelUp();
magician.levelUp();
udead.levelUp();
zombie.levelUp();
daemon.levelUp();
