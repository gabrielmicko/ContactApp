### Contacts app showcase
Containing:

* webpack v2
* redux-devtools v3
* react-hot-loader v3
* css-loader, style-loader, less-loader
* redux, react-redux
* es6
* dev server
* production config and server
* react-router v4
* apollo-client
* graphql


### Description
This is a contacts applications. There are only few functionalities. It can list your contacts, you can search for contacts by using the searchbox.

### Setup

Create a config file
```bash
cp ./src/Config/config.example.json ./src/Config/config.json
```

Install the dependencies
```bash
yarn install
```

Running the development environment
```bash
yarn run dev
```

Building the app for production
```bash
yarn run build
```

Running the production server
```bash
yarn run prod
```

Open in the browser
```bash
open http://localhost:3000
```

### API Setup

Create your contacts file.
```bash
yarn run seed
```

Run the api
```bash
yarn run api
```

Open in the browser
```bash
open http://localhost:4000/graphql
```



### Optional

Prettify LESS and JS
```js
yarn run prettify
```

Prettify LESS and JS on Windows
```js
yarn run prettify-win
```
