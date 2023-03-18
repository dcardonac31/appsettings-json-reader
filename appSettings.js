const fs = require('fs-extra');

function readAppSettings() {
    const appSettingsPath = './appsettings.json';
    const appSettings = fs.readJsonSync(appSettingsPath);
    return appSettings;
}

module.exports = { readAppSettings };