const { loadLanguage, getTranslation, translateToLanguage } = require('../../../../src/javascript/api/languages')
jest.mock('../../../../src/javascript/api/languages')

// let french = require('../../../../languages/french')
// let italian = require('../../../../languages/italian')

// let languages = [
//   french,
//   italian
// ]

describe('Test Language/Translate Component', () => {

  test('getTranslation function should return a defined result', () => {
    expect(getTranslation).toBeDefined()
  })

  test('getTranslation returns french translation', () => {
    expect(getTranslation('Welcome.TakeATheme')).toBe('Choisissez un thème:')
    expect(getTranslation('RecentProjects')).toBe('Projets récents')
    expect(getTranslation('ShowWelcome')).toBe('Afficher l’accueil')
  })

  test('translateToLanguage should be a function', () => {
    expect(typeof translateToLanguage).toBe('function')
  })
  test('translateToLanguage function should return a defined result', () => {
    expect(translateToLanguage).toBeDefined()
  })

  test('translateToLanguage return true upon successful translation', () => {
    expect(translateToLanguage('english')).toBeTruthy()
  })

  test('translateToLanguage return false upon unsuccessful translation', () => {
    expect(translateToLanguage('hokkien')).toBeFalsy()
  })

  test('loadLanguage should be a function', () => {
    expect(typeof loadLanguage).toBe('function')
  })
  test('loadLanguage function should return a defined result', () => {
    expect(loadLanguage).toBeDefined()
  })

})
