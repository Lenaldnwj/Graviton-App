
const { getLink, update, checkUpdates, getGithubInfo } = require('../../../../src/javascript/api/updater')

const Application = require('spectron').Application
const electronPath = require('electron')
const path = require('path')
const fs = require('fs')



test('URL should be https://github.com/Graviton-Code-Editor/Graviton-App/releases', () => {
  expect(getLink()).toBe('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
})

test('Name of github Repository should be  Graviton-Code-Editor/Graviton-App', () => {
  const ghrepo = getGithubInfo()
  const gitHubName = ghrepo.name
  expect(gitHubName).toBe('Graviton-Code-Editor/Graviton-App')
})

// describe('update and getLink function', function () {
//   it('Check update link', function () {
//     const shell = require('electron').shell
//     assert.equal(shell.openExternal('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
//       , shell.openExternal('https://github.com/Graviton-Code-Editor/Graviton-App/releases'))
//   })
// })

// const GravitonInfo = {
//   date: "200119",
//   version: "1.11.0",
//   state: "Beta"
// }
//
// describe('update function', function () {
//   this.timeout(25000)
//   this.beforeAll(function () {
//     this.app = new Application({
//       path: electronPath,
//       args: ['.']
//     })
//     return this.app.start()
//   })
//   // it('Window opened', function () {
//   //   return this.app.client.getWindowCount().then(function (count) {
//   //     assert.equal(count, 1)
//   //   })
//   // })
//   it('shell', function () {
//     // let shell = require('electron').shell
//
//     // shell.openExternal(getLink())
//     checkUpdates()
//
//   })
//   it('.graviton is created', function () {
//     if (this.app && this.app.isRunning()) {
//       return this.app.stop()
//     }
//     return fs.existsSync(DataFolderDir)
//   })
// })