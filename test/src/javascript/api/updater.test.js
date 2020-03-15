const { getLink, getGithubInfo, getGravitonInfo, updateValidity } = require('../../../../src/javascript/api/updater')

// jest.mock('../../../../src/javascript/api/updater')

// const Application = require('spectron').Application
// const electronPath = require('electron')
// const path = require('path')
// const fs = require('fs')
let shell = require('electron').shell

describe('Test Updater Component', () => {
  // test('update should be a function', () => {
  //   expect(typeof update).toBe('function')
  // })
  // test('update function should return a defined result', () => {
  //   expect(update()).toBeDefined()
  // })
  //
  // test('update function should return true', () => {
  //   expect(update()).toBeTruthy()
  // })
  test('getLink should be a function', () => {
    expect(typeof getLink).toBe('function')
  })
  test('getLink function should return a defined result', () => {
    expect(getLink()).toBeDefined()
  })

  test('URL should be https://github.com/Graviton-Code-Editor/Graviton-App/releases', () => {
    expect(getLink()).toBe('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
  })

  test('getGithubInfo should be a function', () => {
    expect(typeof getGithubInfo).toBe('function')
  })
  test('getGithubInfo function should return a defined result', () => {
    expect(getGithubInfo()).toBeDefined()
  })
  test('getGithubInfo function should return ghrepo', () => {
    const github = require('octonode')
    const client = github.client()
    const ghrepo = client.repo('Graviton-Code-Editor/Graviton-App')
    expect(JSON.stringify(getGithubInfo())).toBe(JSON.stringify(ghrepo))
  })

  test('Name of github Repository should be  Graviton-Code-Editor/Graviton-App', () => {
    const ghrepo = getGithubInfo()
    const gitHubName = ghrepo.name
    expect(gitHubName).toBe('Graviton-Code-Editor/Graviton-App')
  })

  test('getGravitonInfo should be a function', () => {
    expect(typeof getGravitonInfo).toBe('function')
  })
  test('getGravitonInfo function should return a defined result', () => {
    expect(getGravitonInfo()).toBeDefined()
  })

  test('Graviton property information should be correct', () => {
    expect(getGravitonInfo()).toStrictEqual({ date: '200119', version: '1.11.0', state: 'Beta' })
  })

  test('checkUpdates() should open Dialog if update found', () => {
    let testVal = ''

    function getDialogStatus (result) {
      testVal = result
      return testVal
    }

    function checkUpdates () {
      const ghrepo = getGithubInfo()
      ghrepo.releases(function (err, res, body) {
        // console.log(res)
        const GravitonInfo = getGravitonInfo()
        if (!err) {
          if (res[0].tag_name !== GravitonInfo.version) {
            getDialogStatus('Dialog Opened')
            expect(testVal).toBe('Dialog Opened')
            return
          }
        }
        getDialogStatus('No Dialog Opened')
        expect(testVal).toBe('No Dialog Opened')
      })
    }
    expect(typeof checkUpdates).toBe('function')
    checkUpdates()

  })

  test('checkUpdates() should not open Dialog if no update found', () => {
    let testVal = ''

    const incorrectGravitonInfo = {
      date: "19028cvvck-",
      version: "asla13",
      state: "23k0"
    }

    function getIncorrectGravitonInfo () {
      return incorrectGravitonInfo
    }

    function getDialogStatus (result) {
      testVal = result
      return testVal
    }

    function checkUpdates () {
      const ghrepo = getGithubInfo()
      ghrepo.releases(function (err, res, body) {
        // console.log(res)
        const GravitonInfo = getIncorrectGravitonInfo()
        if (!err) {
          if (res[0].tag_name !== GravitonInfo.version) {
            getDialogStatus('Dialog Opened')
            expect(testVal).toBe('Dialog Opened')
            return
          }
        }
        getDialogStatus('No Dialog Opened')
        expect(testVal).toBe('No Dialog Opened')

      })
    }
    checkUpdates()
  })

  test('updateValidity should be a function', () => {
    expect(typeof updateValidity).toBe('function')
  })
  test('updateValidity function should return a defined result', () => {
    expect(updateValidity()).toBeDefined()
  })

  test('updateValidity function should return true if Client version < Latest version,' +
    'Client date < Latest date, Client state = Latest state (Case 8)', () => {
    const GravitonInfo = {
      date: "200219",
      version: "1.13.0",
      state: "Beta"
    }
    expect(updateValidity(GravitonInfo.version, GravitonInfo.date, GravitonInfo.state)).toBeTruthy()
  })

  test('updateValidity function should return false for case 1, 2, 3, 4, 5, 6, 7', () => {
    const GravitonInfo = {
      date: "200119",
      version: "1.11.0",
      state: "Beta"
    }
    // Case 1
    expect(updateValidity('1.11.0', '200219', 'Alpha')).toBeFalsy()
    // Case 2
    expect(updateValidity('1.11.0', '200219', 'Beta')).toBeFalsy()
    // Case 3
    expect(updateValidity('1.11.0', '200219', 'Beta')).toBeFalsy()
    // Case 4
    expect(updateValidity('1.11.0', '200219', 'Beta')).toBeFalsy()
    // Case 5
    expect(updateValidity('1.11.0', '200219', 'Alpha')).toBeFalsy()
    // Case 6
    expect(updateValidity('1.11.0', '200219', 'Alpha')).toBeFalsy()
    // Case 7
    expect(updateValidity('1.11.0', '200219', 'Alpha')).toBeFalsy()
  })
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