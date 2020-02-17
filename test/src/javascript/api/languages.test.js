const { loadLanguage, getTranslation } = require('../../../../src/javascript/api/languages')
jest.mock('../../../../src/javascript/api/languages')

// let french = require('../../../../languages/french')
// let italian = require('../../../../languages/italian')

// let languages = [
//   french,
//   italian
// ]

describe('Language/Translate Component', () => {
  test('loadLanguage Function exists', () => {
    expect(loadLanguage).toBeDefined()
  })

  test('getTranslation Function exists', () => {
    expect(getTranslation).toBeDefined()
  })

  test('getTranslation returns french translation', () => {
    expect(getTranslation('Welcome.TakeATheme')).toBe('Choisissez un thème:')
    expect(getTranslation('RecentProjects')).toBe('Projets récents')
    expect(getTranslation('ShowWelcome')).toBe('Afficher l’accueil')

  })
})
