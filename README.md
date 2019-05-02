This project serves as a template to create a react component library

## Developing Components

To start developing a new component, follow these steps:

1. Create a new directory for your components code in `src/components`. For example `mkdir src/components/MyNewComponent`
2. Create an `index.tsx` file in the directory you just created with a default export of your component.
3. Export your new component from the `src/components/index.tsx` file so it can be used outside of the library.

You can use the components you implement in the example app found in `src/example-ap`. The purpose of this directory is to serve as a place where you interactively test and use your components while developing them. This is the app that will run when using `yarn start`.

## Building the library

### `yarn run build-lib`

You can run this script to build from the typescript source code in `src/components`. This will produce output in the `build` directory, with the js code to be packaged and distributed.
<br>
<br>
**The build will ONLY include the code in the `src/components` folder.**
<br>
This can be modified in the `tsconfig.dist.json` file in the root directory, by changing the `include` attribute.
<br/>
<br/>
By default `package.json` includes `react@^16.7.0` and `react-dom@^16.7.0` as `peerDependencies`. If your component library is compatible with earlier versions of react and react-dom, be sure to replace the appropiate versions in `package.json`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
