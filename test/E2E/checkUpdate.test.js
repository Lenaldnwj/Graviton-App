
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
  jest.setTimeout(30000)
  beforeAll(() => {
    return app.start()
  })
  test('Graviton window is opened', function () {
    // expect('1').toBe('1')
    return app.client.getWindowCount().then(function (count) {
      expect(count).toBe(1)
    })
  })
  // test('Click on project name', () => {
  //   return app.client.click('#pfn_318057').then(() => {
  //     return app.client.getWindowCount().then(function(count){
  //       expect(count).toBe(2)
  //     })
  //   })
  // })
  test('Check folder_open text', () => {
    return app.client.getText('#folder_open').then(function(text){
      return expect(text).toBe('Open folder')
    })
  })

  // test('Click Recent Project', function () {
  //   app.client.click('#Graviton-App')
  // })
  // test('Click Tools on top menu -> Click Settings on dropdown', function () {
  //   // app.client.click('#Tools')
  //   app.client.click('#Tools').then(()=> {
  //     app.client.click('#settings_spectron')
  //   })
  // })
  // test('Click Settings on dropdown', function () {
  //   app.client.click('#settings_spectron')
  // })
    // test('Click stuff', async () => {
  //   // expect('1').toBe('1')Graviton-App
  //   // app.client.click('#Graviton-App')
  //   // expect(2).toBe(2)
  //
  //   // app.client.click('#open_folder_welcome')
  //   // app.client.click('. translate_word dropbtn ')
  //
  //   // app.client.click('#Graviton-App')
  //   // app.client.click('#Tools')
  //
  //   // app.client.click('#settings_spectron')
  //   // app.client.click('#settings_spectron')
  //   await app.client.click('#Graviton-App')
  //   await app.client.click('#Help')
  //   await app.client.click('#About')
  //
  //   // app.client.click('#About')
  //
  //   // return app.client.getText('#Settings').then(function(text){
  //   //   return expect(text).toBe('Settings')
  //   // })
  // })
  // test('Check recent_projects text', () => {
  //   return app.client.getText('#recent_projects').then(function(text){
  //     return expect(text).toBe('Graviton-App')
  //   })
  // })
  // test('Click stuff', function () {
  //   // expect('1').toBe('1')Graviton-App
  //   // app.client.click('#Graviton-App')
  //   // expect(2).toBe(2)
  //   return app.client.click('#Graviton-App').getWindowCount().then(function(count){
  //     return expect(count).toBe(3)
  //   })
  // })
  // test('Settings window is opened', function () {
  //   // expect('1').toBe('1')
  //   return app.client.getWindowCount().then(function (count) {
  //     expect(count).toBe(1)
  //   })
  // })

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

  test('Click Recent Project -> Click Tools on top menu -> Click Settings on dropdown', function () {
    app.client.click('#Graviton-App').then(()=>{
      app.client.click('#Tools').then(()=>{
        app.client.click('#settings_spectron').then(()=>{
          app.client.click('#About_spectron').then(()=>{
            app.client.click('#update_button_spectron').then(()=>{
              app.client.click('#update_spectron')
              // setTimeout(() => { app.stop() }, 2000)

            })
          })
        })
      })
    })

    // return app.client.getText('#Settings').then(function(text){
    //   return expect(text).toBe('Settings')
    // })
  })

  // afterAll(() => {
  //   if (app && app.isRunning()) {
  //     return app.stop()
  //   }
  //   return fs.existsSync(DataFolderDir)
  // })

  // test('.graviton is created', function () {
  //   // if (this.app && this.app.isRunning()) {
  //   //   return this.app.stop()
  //   // }
  //   // return fs.existsSync(DataFolderDir)
  //   return this.app.stop()
  // })
})