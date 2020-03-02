const { Notification ,closeNotification } = require('../../../../../src/javascript/api/constructors/notifications')

describe('Test Notification Component', () => {
  test('closeNotification function should return a defined result', () => {
    expect(closeNotification).toBeDefined()
  })

  test('Notification function should return a defined result', () => {
    expect(Notification).toBeDefined()
  })
})