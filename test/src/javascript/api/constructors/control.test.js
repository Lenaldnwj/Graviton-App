const { Control } = require('../../../../../src/javascript/api/constructors/control')

describe('Test Control Component', () => {
  test('Control should be a function', () => {
    expect(typeof Control).toBe('function')
  })
  test('Control function should return a defined result', () => {
    expect(Control).toBeDefined()
  })

})
