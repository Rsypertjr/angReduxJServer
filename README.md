# AngularRedux 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Production deployment uses express server to deploy to Heroku
# server.js
const express = require('express');
const app = express();
# Run the app by serving the static files
# in the dist directory
app.use(express.static(__dirname + '/dist'));
# Start the app by listening on the default
# Heroku port
app.listen(process.env.PORT || 8080);


#Create a Heroku remote and push to depoy the app.
heroku create
git add .
git commit -m "first deploy"
git push heroku master

# API server and file
This app preloads user list from the db.json file which simulates an api accessed thru 'json-server' utility.
Install json server with 'npm install -g json-server'
Run 'json-server --watch db.json'.  The db.json file is in the root directory and is used as the API.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
