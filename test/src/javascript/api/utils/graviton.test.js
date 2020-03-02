const graviton = require('../../../../../src/javascript/api/utils/graviton')
jest.mock('../../../../../src/javascript/api/utils/graviton')


describe('Test Graviton Utility Component', () => {
  let current_config = {
    justInstalled: true,
    theme: "Dark",
    fontSizeEditor: "13",
    appZoom: "25",
    language: "english"
  }

  let themeObject = { name: "Dark", description: "Dark Theme." }

  test('getUILanguage should be a function', () => {
    expect(typeof graviton.getUILanguage).toBe('function')
  })
  test('getUILanguage function should return a defined result', () => {
    expect(graviton.getUILanguage()).toBeDefined()
  })
  test('getUILanguage should return Graviton language name', () => {
    expect(graviton.getUILanguage()).toBe(current_config.language)
  })


  test('getCurrentTheme should be a function', () => {
    expect(typeof graviton.getCurrentFile).toBe('function')
  })
  test('getCurrentTheme function should return a defined result', () => {
    expect(graviton.getCurrentFile).toBeDefined()
  })
  test('getCurrentTheme should return Graviton language name', () => {
    expect(graviton.getCurrentTheme()).toBe(themeObject.name)
  })

})