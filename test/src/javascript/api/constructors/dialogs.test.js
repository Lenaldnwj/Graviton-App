const { animationStatus } = require('../../../../../src/javascript/api/constructors/dialogs')

describe('Test Dialogs Component', () => {

  test('animationStatus should be a function', () => {
    expect(typeof animationStatus).toBe('function')
  })
  test('animationStatus function should return a defined result', () => {
    expect(animationStatus).toBeDefined()
  })
  test('animationStatus should return window_slide_up linear 0.1s if animationsPreferences is activated', () => {
    let current_config = {
      animationsPreferences: 'activated'
    }
    expect(animationStatus(current_config)).toBe(`window_slide_up linear 0.1s;`)

  })
  test('animationStatus should return null if animationsPreferences is not activated', () => {
    let current_config = {
      animationsPreferences: 'inactive'
    }
    expect(animationStatus(current_config)).toBe('')
  })

})
