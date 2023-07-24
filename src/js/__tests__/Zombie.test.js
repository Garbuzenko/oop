import Zombie from '../Zombie';

test('Получим объект Zombie', () => {
  const description = new Zombie('zombie');
  const result = {
    name: 'zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(description).toEqual(result);
});
