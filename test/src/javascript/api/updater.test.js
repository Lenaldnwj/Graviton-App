const { getLink, getGithubInfo, getGravitonInfo, updateValidity } = require('../../../../src/javascript/api/updater')

// jest.mock('../../../../src/javascript/api/updater')

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

  test('updateValidity function should return false for case 1 (Decision Table Technique)', () => {
    // Case 1
    expect(updateValidity('2.11.0', '200220', 'Alpha')).toBeFalsy()
  })

  test('updateValidity function should return false for case 2 (Decision Table Technique)', () => {
    // Case 2
    expect(updateValidity('2.11.0', '200218', 'Alpha')).toBeFalsy()
  })

  test('updateValidity function should return false for case 3 (Decision Table Technique)', () => {
    // Case 3
    expect(updateValidity('0.11.0', '200220', 'Beta')).toBeFalsy()
  })

  test('updateValidity function should return false for case 4 (Decision Table Technique)', () => {
    // Case 4
    expect(updateValidity('0.11.0', '200218', 'Beta')).toBeFalsy()
  })

  test('updateValidity function should return false for case 5 (Decision Table Technique)', () => {
    // Case 5
    expect(updateValidity('2.11.0', '200218', 'Alpha')).toBeFalsy()
  })

  test('updateValidity function should return false for case 6 (Decision Table Technique)', () => {
    // Case 6
    expect(updateValidity('0.11.0', '200220', 'Alpha')).toBeFalsy()
  })

  test('updateValidity function should return false for case 7 (Decision Table Technique)', () => {
    // Case 7
    expect(updateValidity('0.11.0', '200218', 'Alpha')).toBeFalsy()
  })

  test('updateValidity function should return true for case 8 (Decision Table Technique)', () => {
    const GravitonInfo = {
      date: "200219",
      version: "1.13.0",
      state: "Beta"
    }
    //Case 8
    expect(updateValidity(GravitonInfo.version, GravitonInfo.date, GravitonInfo.state)).toBeTruthy()
  })

})