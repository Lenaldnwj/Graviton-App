const { gravitonLoaded, tabCreated, tabLoaded, screenLoaded, newRecentProject,  splitScreen, closedScreen, tabReorganized} = require('../../../../../src/javascript/api/utils/events')


describe('Test Events Component', () => {
  test('gravitonLoaded should be a function', () => {
    expect(typeof gravitonLoaded).toBe('function')
  })
  test('gravitonLoaded function should return a defined result', () => {
    expect(gravitonLoaded).toBeDefined()
  })

  test('gravitonLoaded should create graviton_loaded custom event', () => {
    expect(gravitonLoaded()).toStrictEqual(new CustomEvent('graviton_loaded', {}))
  })
  test('tabCreated  should create tabCreated custom event', () => {
    expect(tabCreated('elementHolder')).toStrictEqual(new CustomEvent('tab_created', {
      detail: {
        tab: 'elementHolder'
      }
    }))
  })
  test('tabLoaded should create tab_loaded custom event', () => {
    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('screen', '5')
    htmlElement.innerHTML = 'placeholder'
    // document.body.appendChild(htmlElement)

    expect(tabLoaded(htmlElement)).toStrictEqual(new CustomEvent("tab_loaded", {
      detail: {
        screen: '5'
      }
    }))
  })
  test('screenLoaded should create screen_loaded custom event', () => {
    var htmlElement
    htmlElement = document.createElement('div')
    htmlElement.setAttribute('screen', '6')
    htmlElement.innerHTML = 'placeholder'
    // document.body.appendChild(htmlElement)

    expect(screenLoaded(htmlElement)).toStrictEqual(new CustomEvent("screen_loaded", {
      detail: {
        screen: '6'
      }
    }))
  })
  test('closedScreen should create closed_screen custom event', () => {
    expect(closedScreen('8')).toStrictEqual(new CustomEvent("closed_screen", {
      detail: {
        screen: '8'
      }
    }))
  })
  test('tabReorganized should create tab_reorganized custom event', () => {
    expect(tabReorganized('data_holder')).toStrictEqual(new CustomEvent("tab_reorganized", {
      detail: {
        screen: 'data_holder'
      }
    }))
  })

  // test('gravitonLoaded  should create graviton_loaded custom event', () => {
  //   expect(gravitonLoaded()).toStrictEqual(new CustomEvent('graviton_loaded', {}))
  // })
  // test('gravitonLoaded  should create graviton_loaded custom event', () => {
  //   expect(gravitonLoaded()).toStrictEqual(new CustomEvent('graviton_loaded', {}))
  // })
})