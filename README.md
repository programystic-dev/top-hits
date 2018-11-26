# Top Hits List

Shows top 100 albums based on the json feed here: https://itunes.apple.com/us/rss/topalbums/limit=100/json

## Comment on the code

Crossbrowser support is included in Create React App. App was tested on Chrome, Firefox, Safari and Edge.

Used setTimeout() to show an animation of Loader ♪ ♫ ♬

## About routes (routes branch)

Routes in the project was created using [React Router](https://github.com/ReactTraining/react-router). For now item's data from the list is passed via Link element, which creates minor problems - can't access details page directly from a link, only by selecting an item from the List. This could be quickly fixed by fetching data inside the DetailsRoute Component, however the best solution would be introducing [Redux](https://redux.js.org/). By creating a store, only the id of the item would be passed via Link and then used to read the proper data from store.

## Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
