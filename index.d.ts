export interface AppSettings {
    [key: string]: any;
  }
  
  export function readAppSettings(): AppSettings;