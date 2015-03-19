##Tuber
#####*Search/Filter/Sort YouTube Videos Instantly*

###Live Demo
[Visit Tuber online!](https://tuber.firebaseapp.com/)

###Technologies Used
  * React
  * React Router
  * Flux
  * Bootstrap
  * YouTube API v3
  * Firebase

###SETUP:
  * Fork this repo and clone your fork
  * run ```npm install```
  * run ```webpack -w``` to build and watch
  * run ```webpack-dev-server``` to run app locally.
  * go to ```http://localhost:8080/public```

For reference the final folder structure should look something like this:

###Code Architecture

```
├── app/
│   ├── App.js
│   ├── actions
|   ├── ├── SearchActions.js
|   ├── components/
|   ├── ├── SearchBar/
|   ├── ├── ├── SearchBar.js
|   ├── ├── ├── SearchResultsContainer.js
|   ├── ├── ├── Register.js
|   ├── ├── Table/
|   ├── ├── ├── Columns/
|   ├── ├── ├── ├── Created.js
|   ├── ├── ├── ├── Id.js
|   ├── ├── ├── ├── Image.js
|   ├── ├── ├── ├── Title.js
|   ├── ├── ├── ├── Views.js
|   ├── ├── ├── Table.js
|   ├── ├── ├── TableContainer.js
|   ├── ├── ├── TableFilterBar.js
|   ├── ├── ├── TablerHeader.js
|   ├── ├── ├── TableRow.js
|   ├── ├── Main.js
|   ├── config/
|   ├── ├── routes.js
|   ├── constants/
|   ├── ├── AppConstants.js
|   ├── dispatcher/
|   ├── ├── AppDispatcher.js
|   ├── stores/
|   ├── ├── SearchStore.js
|   ├── utils/
|   ├── ├── Helpers/
|   ├── ├── ├── helpers.js
|   ├── ├── SearchYouTubeUtils.js
├── public/
│   ├── index.html
|   ├── css/
│   ├── ├── mains.css
├── webpack.config.js
├── package.json
├── README.md
├── .gitignore
```
