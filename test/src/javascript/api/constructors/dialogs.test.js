const { animationStatus, closeDialog, removeDialogEle, reduceWinCount, increaseWinCount, checkDiagNum } = require('../../../../../src/javascript/api/constructors/dialogs')

describe('Test Dialogs Component', () => {

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
    document.body.appendChild(htmlElement)
    expect(document.getElementById('3_dialog')).not.toBe(null)

    removeDialogEle(3)
    expect(document.getElementById('3_dialog')).toBe(null)

  })


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
    expect(animationStatus(current_config)).toBe('window_slide_up linear 0.1s;')

  })
  test('animationStatus should return null if animationsPreferences is not activated', () => {
    let current_config = {
      animationsPreferences: 'inactive'
    }
    expect(animationStatus(current_config)).toBe('')
  })


  test('removeDialogEle should not remove element that are not input into function', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '80_dialog')
    htmlElement.innerHTML = 'placeholder'
    document.body.appendChild(htmlElement)

    removeDialogEle(10)
    var existElement = document.getElementById('80_dialog')
    expect(existElement).not.toBe(null)
  })

  test('removeDialogEle should remove element', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'placeholder'
    document.body.appendChild(htmlElement)

    removeDialogEle(3)
    var noElement = document.getElementById('3_dialog')
    expect(noElement).toBe(null)
  })

  test('removeDialogEle should return true if element is found and removed', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '4_dialog')
    htmlElement.innerHTML = 'placeholder'
    document.body.appendChild(htmlElement)


    expect(removeDialogEle(4)).toBeTruthy()
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
    htmlElement.setAttribute('windows', '12')
    htmlElement.innerHTML = 'placeholder text'

    document.body.appendChild(htmlElement)
    reduceWinCount()
    var attribute = document.getElementById('body').getAttribute('windows')
    expect(attribute).toBe('11')
  })

  test('increaseWinCount should be a function', () => {
    expect(typeof increaseWinCount).toBe('function')
  })
  test('increaseWinCount function should return a defined result', () => {
    expect(increaseWinCount).toBeDefined()
  })
  test('increaseWinCount should increase window attribute of element by 1', () => {
    document.getElementById('body').removeAttribute('windows')
    var htmlEle
    htmlEle = document.createElement('div')
    htmlEle.setAttribute('id', 'body')
    htmlEle.setAttribute('windows', '0')
    htmlEle.innerHTML = 'placeholder text'

    document.body.appendChild(htmlEle)
    // console.log(htmlElement.getAttribute('windows'))
    increaseWinCount()
    var attribute = document.getElementById('body').getAttribute('windows')
    expect(attribute).toBe('1')
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
    htmlElement.innerHTML = 'placeholder'
    document.body.appendChild(htmlElement)
    expect(closeDialog(3)).toBeTruthy()
  })
  test('closeDialog should return false if element id do not exist', () => {

    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('id', '3_dialog')
    htmlElement.innerHTML = 'placeholder'
    document.body.appendChild(htmlElement)
    expect(closeDialog(1)).toBeFalsy()
  })

  test('checkDiagNum should return false if number is not between 0 and 5 inclusive (BVA)', () => {
    expect(checkDiagNum(6)).toBeFalsy()
    expect(checkDiagNum(-1)).toBeFalsy()
  })

  test('checkDiagNum should return true if number is between 0 and 5 inclusive (BVA)', () => {
    expect(checkDiagNum(0)).toBeTruthy()
    expect(checkDiagNum(5)).toBeTruthy()
  })
  test('checkDiagNum should return false if number is not between 0 and 5 inclusive (BVA)', () => {
    expect(checkDiagNum(-1)).toBeFalsy()
    expect(checkDiagNum(6)).toBeFalsy()
  })

})