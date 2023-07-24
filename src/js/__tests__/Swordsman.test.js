import Swordsman from '../Swordsman';

test('Получим объект Swordsman', () => {
  const description = new Swordsman('swordsman');
  const result = {
    name: 'swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});
