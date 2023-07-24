import Character from '../Character';

test('Получим объект Character', () => {
  const description = new Character('Green');
  const result = {
    name: 'Green', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});

test('Повышаем уровень персонажа', () => {
  const description = new Character('warrior');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'warrior', health: 100, level: 2, attack: 12, defense: 12,
  };
  expect(description).toEqual(result);
});

test('нельзя повысить левел умершего', () => {
  function test() {
    const description = new Character('warrior');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});

test('Получим ошибку имени', () => {
  const description = () => new Character('B');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('Получим ошибку имени', () => {
  const description = () => new Character('Bravo111111');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});
