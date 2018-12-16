# Reactron-Boilerplate

Minimal Electron Boilerplate with Parcel and React. 🎩

## First Steps

```bash
git clone https://github.com/MonkeyAndres/reactron-boilerplate.git <appname>
cd <appname>
npm install && npm start
```

## Features

* Create executables for all platforms (win, mac, linux)
* React + Redux dev tools support
* Parcel support ([read more](https://parceljs.org/))
* ESLint support
* Supports frontend routing with react-router (example included)

## Documentation

### Where do I put the code?

First of all the boilerplate comes with a simple React app with React Router. You should put all your React code inside `src` the entry file for electron is `src/index.js`.

### Icons

The icons folder is located in `assets/icons`. Theres 3 icons:

* icon.icns (mac os icon)
* icon.ico (windows icon)
* 512x512 (linux icon)

Read more about icons here: https://www.electron.build/icons

### Configuration

The configuration file is `electron-builder.yml` here you should edit:

```yaml
appId: <com.yourname.appname>
copyright: <copyright or license>
productName: <display app name>
compression: <maximum|normal|stores>
```

Theres a lot of options you can add to this configuration file but we provide you with only a few configs, you can extend this file with the link below.

Read more about the configuration here: https://www.electron.build/configuration/configuration

### Scripts

I recommend don't modify any of the scripts unless you know what are you modifying.

- `npm run build`= bundle the app in prod mode to ./build
- `npm run dev`= bundle the app and run electron (live reload)
- `npm run format`= format the app with prettier-standart
- `npm run lint`= runs eslint in the src folder
- `npm run package`= package the app for your platform with electron-builder
- `npm run package:<platform>`
  - `:all`
  - `:mac` = DMG + APP
  - `:win` = MSI + EXE
  - `:linux` = AppImage + DEB + RPM
- `npm run start` = builds the app and run electron in prod mode

> If you aren't in a Windows PC you need wine and mono for package the app for the Windows platform.
>
> You only can package the app for MacOS with a Mac.