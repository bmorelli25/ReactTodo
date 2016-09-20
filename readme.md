###React Todo Application

###**Live Demo: [heroku](https://react-firebase-todo-app.herokuapp.com/)**

-------------

[React](https://facebook.github.io/react/) web application for creating and maintining a To-Do list. Users data is persisted and you can check off completed To-Dos which removes them from the view. The app utilizes:

* [Webpack](https://webpack.github.io/) module bundler
* [React Router](https://github.com/reactjs/react-router) routing library
* [Express](https://expressjs.com/) for a simple server to run our application
* [Foundation](http://foundation.zurb.com/) for styling
* [Sass Loader](https://github.com/jtangelder/sass-loader) & [node-sass](https://github.com/sass/node-sass)
* [Karma](https://karma-runner.github.io/1.0/index.html) test runner
* [Expect](https://github.com/mjackson/expect) assertion libarary

-------------
**Enviornment variables are necessary for the app to work**
* Testing env variables can be set in: ```/config/test.env```
* Development env variables can be set in ```/config/development.env``` 
* You need two Firebase Databases - one for testing, one for production
* Populate each env file with the following:
```
API_KEY=fillThisOut
AUTH_DOMAIN=fillThisOut
DATABASE_URL=fillThisOut
STORAGE_BUCKET=fillThisOut
MESSAGING_SENDER_ID=fillThisOut
GITHUB_ACCESS_TOKEN=fillThisOut
```
* The ```API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET, MESSAGING_SENDER_ID``` all come from Firebase/Add Firebase to your web app
* The ```GITHUB_ACCESS_TOKEN``` comes from Github/Settings/Personal Access Tokens
