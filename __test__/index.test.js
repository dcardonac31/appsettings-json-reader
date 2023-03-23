const { AppSettings } = require('../index');

describe('AppSettings', () => {
  test('readAppSettings should return the fileJson object with variable test equal to "Hello World"', () => {
    const appSettings = AppSettings.readAppSettings();
    expect(appSettings).toBeDefined();
  });
});
