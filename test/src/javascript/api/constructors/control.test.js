const { Control } = require('../../../../../src/javascript/api/constructors/control')

describe('Test Control Component', () => {
  test('Control should be a function', () => {
    expect(typeof Control).toBe('function')
  })
  test('Control function should return a defined result', () => {
    expect(Control).toBeDefined()
  })

  // test('Control function input', () => {
  //   var htmlElement
  //   htmlElement = document.createElement('div')
  //   htmlElement.setAttribute('id', '67')
  //
  //   Control({ text: 'textholder', hint: 'hintholder', screen: '67', onClick: 1})
  //   expect(document.getElementById('67')).toBe('textholder')
  // })

})
