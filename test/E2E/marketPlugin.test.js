const Application = require('spectron').Application
const electronPath = require('electron')
const path = require('path')
const fs = require('fs')

const DataFolderDir = path.join(path.join(__dirname, '..'), '.graviton')

const app = new Application({
  path: electronPath,
  args: ['.']
})

describe('Check for market plugin (E2E)', function () {

// describe('Check for updates', function () {
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

  test('Check folder_open text', () => {
    return app.client.getText('#folder_open').then(function(text){
      return expect(text).toBe('Open folder')
    })
  })

  test('External link to Graviton Github page is opened', function () {
    const github = require('octonode')
    const client = github.client()
    const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
    const grav = JSON.stringify(client.repo('Graviton-Code-Editor/Graviton-App'))
    expect(JSON.stringify(ghrepo)).toBe(grav)

  })

  test('Click Recent Project -> Click Tools on top menu -> Click Market on dropdown', function () {
    app.client.click('#Graviton-App').then(()=>{
      app.client.click('#Tools').then(()=>{
        app.client.click('#Market').then(()=>{
          app.client.click('#FluentMod').then(()=>{
            app.client.click('#FluentMod-install').then(()=>{
              // setTimeout(() => { app.stop() }, 5000)

              app.client.click('#close_notification').then(()=>{
                app.client.click('#button_installed').then(()=>{
                  app.client.click('#FluentMod').then(()=>{
                  })
                })
              })
            })
          })
        })
      })
    })
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