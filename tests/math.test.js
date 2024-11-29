const add = require('../src/math');

test('Додавання чисел', () => {
    expect(add(2, 4)).toBe(6);
    expect(add(-3, 1)).toBe(-2);
});
