import Undead from '../Undead';

test('Получим объект Undead', () => {
  const description = new Undead('undead');
  const result = {
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});
