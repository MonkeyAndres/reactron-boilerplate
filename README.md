# Reactron-Boilerplate
Minimal Electron Boilerplate with Parcel and React. 🎩

## Usage

```bash
git clone https://github.com/MonkeyAndres/reactron-boilerplate.git <appname>
cd <appname>
npm install && npm start
```

## Documentation

### Scripts

* `npm run build`= bundle the app in prod mode to ./build
* `npm run dev`= bundle the app and run electron (live reload)
* `npm run format`= format the app with prettier-standart
* `npm run package`= package the app for your platform with electron-builder
* `npm run package:<platform>`
  * `:all`
  * `:mac` = DMG + APP
  * `:win` = MSI + EXE
  * `:linux` = AppImage + DEB + RPM
* `npm run start` = builds the app and run electron in prod mode

## Features

* Electron packager all platforms
* React + Redux dev tools
* Parcel support ([read more](https://parceljs.org/))
* Package your app thanks to electron-builder