import Character from '../Character';

test('Получим объект Character', () => {
  const description = new Character('Green', 'Bowman');
  const result = {
    name: 'Green', type: 'Bowman', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});

test('Повышаем уровень персонажа', () => {
  const description = new Character('warrior', 'Bowman');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'warrior', type: 'Bowman', health: 100, level: 2, attack: 12, defense: 12,
  };
  expect(description).toEqual(result);
});

test('нельзя повысить левел умершего', () => {
  function test() {
    const description = new Character('warrior', 'Bowman');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});

test('Наносим урон', () => {
  const description = new Character('warrior', 'Bowman');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.damage(10);
  const result = {
    name: 'warrior', type: 'Bowman', health: 41, level: 1, attack: 10, defense: 10,
  };
  console.log(description);
  expect(description).toEqual(result);
});

test('Наносим отрицательный урон', () => {
  const description = new Character('warrior', 'Bowman');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.damage(-10);
  // console.log(description);
  expect(description).toThrow('урон не может быть отрицательным');
});

test('Получим ошибку имени', () => {
  const description = () => new Character('B', 'Bowman');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('Получим ошибку имени', () => {
  const description = () => new Character('Bravo111111', 'Bowman');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});


test('Получим ошибку типа', () => {
  const description = () => new Character('Bravo', 'TTT');
  expect(description).toThrow('Тип задан неверно');
});
