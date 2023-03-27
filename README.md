# appsettings-json-reader
Visit Youtube Channel DacarSoft
→[DacarSoft](https://www.youtube.com/c/DacarSoft) ←
## English
`appsettings-json-reader` is a package for reading the appsettings.json file located in the root directory of an Angular or NestJS project. It provides an alternative to using environment files.
#### Installation
```
npm i appsettings-json-reader
```

#### Usage
To use `appsettings-json-reader`, first import the AppSettings class from the package:
```
import { AppSettings } from 'appsettings-json-reader';
```
Next, call the `readAppSettings()` method on the AppSettings class to read the `appsettings.json` file:
```
const appSettings = AppSettings.readAppSettings();

```
#### Example in Angular

→[YouTube Video](https://youtu.be/g54HRRW14Jk) ←
```
import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appSettings: any = AppSettings.readAppSettings();

  ngOnInit() {
    console.log(this.appSettings.appName); // prints "My Application"
    console.log(this.appSettings.apiEndpoint); // prints "https://myapi.com"
  }
}
```
#### Example in NestJS
```
import { Injectable } from '@nestjs/common';
import { AppSettings } from 'appsettings-json-reader';

@Injectable()
export class AppService {
  appSettings: any = AppSettings.readAppSettings();

  getHello(): string {
    console.log(this.appSettings.appName); // prints "My Application"
    console.log(this.appSettings.apiEndpoint); // prints "https://myapi.com"
    return this.appSettings.appName;
  }
}

```
#### Contributing
If you want to contribute to `appsettings-json-reader`, please submit a pull request. All contributions are welcome!

#### License

MIT

-------------------------------------------------------------------
# appsettings-json-reader
Visita el canal de Youtube DacarSoft
→[DacarSoft](https://www.youtube.com/c/DacarSoft) ←
## Español
`appsettings-json-reader` es un paquete para leer el archivo `appsettings.json` ubicado en el directorio raíz de un proyecto Angular o NestJS. Proporciona una alternativa al uso de archivos de entorno.
#### Instalación
```
npm i appsettings-json-reader
```

#### Uso
Para usar  `appsettings-json-reader`, primero importa la clase `AppSettings`del paquete:
```
import { AppSettings } from 'appsettings-json-reader';
```
A continuación, llama al método `readAppSettings()` en la clase `AppSettings` para leer el archivo `appsettings.json`:
```
const appSettings = AppSettings.readAppSettings();

```
#### Ejemplo en Angular
→[YouTube Video](https://youtu.be/g54HRRW14Jk) ←
```
import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'appsettings-json-reader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appSettings: any = AppSettings.readAppSettings();

  ngOnInit() {
    console.log(this.appSettings.appName); // prints "My Application"
    console.log(this.appSettings.apiEndpoint); // prints "https://myapi.com"
  }
}
```
#### Ejemplo en NestJS

```
import { Injectable } from '@nestjs/common';
import { AppSettings } from 'appsettings-json-reader';

@Injectable()
export class AppService {
  appSettings: any = AppSettings.readAppSettings();

  getHello(): string {
    console.log(this.appSettings.appName); // prints "My Application"
    console.log(this.appSettings.apiEndpoint); // prints "https://myapi.com"
    return this.appSettings.appName;
  }
}

```
#### Contribuir
Si deseas contribuir a `appsettings-json-reader`, envía una solicitud de extracción (pull request). ¡Todas las contribuciones son bienvenidas!

#### License
MIT

