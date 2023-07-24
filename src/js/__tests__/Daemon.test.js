import Daemon from '../Daemon';

test('Получим объект Daemon', () => {
  const description = new Daemon('daemon');
  const result = {
    name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(description).toEqual(result);
});
