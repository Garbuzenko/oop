import Bowman from '../Bowman';

test('Получим объект Bowman', () => {
  const description = new Bowman('bowman');
  const result = {
    name: 'bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});
