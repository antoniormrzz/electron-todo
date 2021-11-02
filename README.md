# electron-todo
This is a todo manager with electron, sqlite3 and vue. sqlite3 is a native module and needs to be rebuilt before you can run the app or distribute it. A script is setup to rebuild sqlite3 after you run npm install.

## Planning
Everything began with listing down requirements, which were language, framework, storage and some dev tools. During the first steps, I set up the framework, integrated electron, installed sqlite3, and made sure it all worked perfectly before I began development. Then I moved on the bare UI of the app. Next I moved on to expanding the electron code with a bridge and a storage module. I then moved on to providing basic functionality on tasks and perfecting them, later integrating keyboard shortcuts and finally production preparations.

## Project setup
```
npm install
```

### Run app locally
```
npm start
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Distribute for the current platform
```
npm run dist
```
