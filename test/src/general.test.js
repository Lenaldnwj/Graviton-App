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

describe('Opening Graviton ', function () {
  jest.setTimeout(25000)
  beforeEach(() => {
    return app.start()
  })
  test('Window opened', function () {
    // expect('1').toBe('1')
    return app.client.getWindowCount().then(function (count) {
      expect(count).toBe(2)
    })
  })
  // test('Window opened', function () {
  //   expect('1').toBe('1')
  // })
  afterEach(() => {
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