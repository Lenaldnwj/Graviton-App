const { animationStatus, closeDialog, removeDialogEle, reduceWinCount } = require('../../../../../src/javascript/api/constructors/dialogs')

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

  test('removeDialogEle should be a function', () => {
    expect(typeof removeDialogEle).toBe('function')
  })
  test('removeDialogEle function should return a defined result', () => {
    expect(removeDialogEle).toBeDefined()
  })

  test('removeDialogEle should remove element if element exist in document', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)

    removeDialogEle(3)
    var noElement = document.getElementById('3_dialog')
    expect(noElement).toBe(null)

    // closeDialog ('1')
    // expect(document.getElementById('1_dialog')).not.toBeDefined()
    // expect(document.getElementById('1_dialog').innerHTML).toBe('lul')
  })

  test('removeDialogEle should remove element', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)

    removeDialogEle(3)
    var noElement = document.getElementById('3_dialog')
    expect(noElement).toBe(null)
  })

  test('removeDialogEle should return true if element is found and removed', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '4_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)

    expect(removeDialogEle(4)).toBeTruthy()
  })

  test('removeDialogEle should not remove element that are not input into function', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '80_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)

    removeDialogEle(10)
    var existElement = document.getElementById('80_dialog')
    expect(existElement).not.toBe(null)
  })

  test('removeDialogEle should return false if element not found', () => {
    expect(removeDialogEle(10)).toBeFalsy()
  })

  test('reduceWinCount should be a function', () => {
    expect(typeof reduceWinCount).toBe('function')
  })
  test('reduceWinCount function should return a defined result', () => {
    expect(reduceWinCount).toBeDefined()
  })

  test('reduceWinCount should reduce window attribute of element by 1', () => {
    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', 'body')
    htmlElement.setAttribute('windows', '5')
    htmlElement.innerHTML = 'placeholder text'

    document.body.appendChild(htmlElement)
    reduceWinCount()
    var attribute = document.getElementById('body').getAttribute('windows')
    expect(attribute).toBe('4')
  })

  test('closeDialog should be a function', () => {
    expect(typeof closeDialog).toBe('function')
  })
  test('closeDialog function should return a defined result', () => {
    expect(closeDialog).toBeDefined()
  })
  test('closeDialog should return true if element removed and attribute mutated ', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)
    expect(closeDialog(3)).toBeTruthy()
  })
  test('closeDialog should return false if element id do not exist', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'lul'
    document.body.appendChild(htmlElement)
    expect(closeDialog(1)).toBeFalsy()
  })
})
