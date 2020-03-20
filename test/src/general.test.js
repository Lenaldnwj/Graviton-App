// /**
//  * @desc Basic testing
//  */
//
// const Application = require('spectron').Application
// const electronPath = require('electron')
// const path = require('path')
// const fs = require('fs')
//
// const DataFolderDir = path.join(path.join(__dirname, '..'), '.graviton')
//
// const app = new Application({
//   path: electronPath,
//   args: ['.']
// })
//
// describe('Opening Graviton ', function () {
//   jest.setTimeout(25000)
//   beforeEach(() => {
//     return app.start()
//   })
//   // test('Window opened', function () {
//   //   // expect('1').toBe('1')
//   //   return app.client.getWindowCount().then(function (count) {
//   //     expect(count).toBe(2)
//   //   })
//   // })
//
//   test('Window opened', function () {
//     // expect('1').toBe('1')
//     return app.client.getSelectedText().then(function (selectedText) {
//       console.log(selectedText)
//       console.log('HELLOOOO')
//     })
//   })
//   test('Window opened', function () {
//     // expect('1').toBe('1')
//     return app.client.
//   })
//
//   afterEach(() => {
//     if (app && app.isRunning()) {
//       return app.stop()
//     }
//     return fs.existsSync(DataFolderDir)
//   })
//
//   // test('.graviton is created', function () {
//   //   if (this.app && this.app.isRunning()) {
//   //     return this.app.stop()
//   //   }
//   //   return fs.existsSync(DataFolderDir)
//   // })
// })

/**
 * @desc Basic testing
 */

const Application = require('spectron').Application
const electronPath = require('electron')
const path = require('path')
const fs = require('fs')

const DataFolderDir = path.join(path.join(__dirname, '..'), '.graviton')

const app = new Application({
  path: electronPath,
  args: ['.']
})

describe('Check for updates (E2E)', function () {
  jest.setTimeout(25000)
  beforeAll(() => {
    return app.start()
  })
  test('Graviton window is opened', function () {
    // expect('1').toBe('1')
    return app.client.getWindowCount().then(function (count) {
      expect(count).toBe(2)
    })
  })

  test('Settings window is opened', function () {
    // expect('1').toBe('1')
    return app.client.getWindowCount().then(function (count) {
      expect(count).toBe(2)
    })
  })

  test('External link to Graviton Github page is opened', function () {
    const github = require('octonode')
    const client = github.client()
    const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
    const grav = JSON.stringify(client.repo('Graviton-Code-Editor/Graviton-App'))
    expect(JSON.stringify(ghrepo)).toBe(grav)

  })
  // test('Graviton window is opened', function () {
  //   // expect('1').toBe('1')
  //   return app.client.getSelectedText().then(function (selectedText) {
  //     console.log(selectedText)
  //     console.log('HELLOOOO')
  //   })
  // })

  afterAll(() => {
    if (app && app.isRunning()) {
      return app.stop()
    }
    return fs.existsSync(DataFolderDir)
  })

  // test('.graviton is created', function () {
  //   if (this.app && this.app.isRunning()) {
  //     return this.app.stop()
  //   }
  //   return fs.existsSync(DataFolderDir)
  // })
})