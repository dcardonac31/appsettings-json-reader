import fileJson from '../../appsettings.json';
export class AppSettings {
    constructor() {
        this.fileJson = fileJson;
    }
    static readAppSettings() {
        AppSettings.instance = new AppSettings();
        return AppSettings.instance.fileJson;
    }
}