import Magician from '../Magician';

test('Получим объект Magician', () => {
  const description = new Magician('magician');
  const result = {
    name: 'magician', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});
