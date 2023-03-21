"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppSettings {
    constructor() {
        this.fileJson = require('../../appsettings.json');
    }
    static readAppSettings() {
        AppSettings.instance = new AppSettings();
        return AppSettings.instance.fileJson;
    }
}
exports.AppSettings = AppSettings;