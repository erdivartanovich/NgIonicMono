# NgDigipos
Custom Monorepo Boiler project consist of: 
- Angular boilerplate (web, and library),
- Two Ionic Applications with Capacitor android for Building Multiple Platfowm Apps (Electron, Android, Ios, Windows)
With this setup we can achieve sharing core library across all the projects.
## Development server

#### Running Angular App (Web)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Running Ionic App (Web)

```sh
  ionic serve --project={projectName}
```

## Build

### Auto Generate Multiplatform Resources For Ionic App
Will auto generate splashscreen & icon inside resources folder of ionics for windows, android, and ios
```sh
  cd ionics
  npx cordova-res --skip-config --copy
```
For electron you should replace all images in electron/assets folder

### Build Multiplatform ionic App
```
  cd root
  ionic capacitor build {platform}  # platform=android,ios,electron
```



