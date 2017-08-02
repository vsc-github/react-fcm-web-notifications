# [simplest-offline-react-redux-starter](https://github.com/vsc-github/simplest-offline-react-redux-starter)

This is yet another starter template using React & Redux. However, this project attempts to create a bare bones starter to start developing on a side project, a demo or a POC right away. 
I created this after being fed up of using different starter and spending a day clearing out unnecessary code out of them. It demonstrates simple react redux flow along with a few offline capabilities using the technologies listed below.

But first, the [demo!]() A basic counter, the buttons update the redux store via dispatching an action.
Note: Check the console for state changes. (thanks to [redux-logger](https://github.com/evgenyrodionov/redux-logger))

## Technologies used:

- [React](https://github.com/facebook/react)
- [Redux](https://github.com/rackt/redux)
- [React Router](https://github.com/rackt/react-router)
- [create-react-app](https://github.com/facebookincubator/create-react-app/)
- [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/) (now behind the scenes thanks to create-react-app)

## Feature highlights:

#### Best React Practice - [Separating "smart" and "dumb" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

This design pattern makes even more sense when using React along with Redux, where top-level smart components (a.k.a. containers in this codebase such as `Home`) subscribe to Redux state and dispatch Redux actions, while low level components (such as `User`) read data and invoke callbacks passed in as props.


Although it's "cool" to have universal (server-side, isomorphic) rendering these days, there are many situations (like this one) where that complexity is simply not useful or applicable.

## Getting Started
Thanks to [create-react-app](https://github.com/facebookincubator/create-react-app), we will have a configuration-free dev experience. 

To get started, please clone this git repository and then run `npm install` once under the project top-level directory. 

```
git clone https://github.com/vsc-github/simplest-offline-react-redux-starter awesome-project
cd awesome-project
npm install
```
This will install the dependencies for the client side.

**You’ll need to have Node installed on your machine**. (Node >= 6 and npm >= 3 are recommended).

## While You're Developing...
Whenever you want to run/test the program, `cd` to the project top-level directory. Use these commands:

### `npm start`

Runs the app in the development mode, using the Webpack-provided "development server".<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

Note: `eject` is an advanced `create-react-app` tool. Read the [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md) for details.

## How Do I ... ?

This project was ported to use [create-react-app](https://github.com/facebookincubator/create-react-app) for handling all assets. 
Many questions are answered in its [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).

