# Getting Started with Create React App
in terminal, cd into file, make directory there, cd into that directory and create a react-app.
```
$cd week2
$mkdir 'name of directory'
$cd 'name of directory' 
$yarn create react-app 'name of project'
```

# Git hub 
1. sign into github and add new repository. 
2. copy zsh remote
3. paste remote into terminal
4. push to github with following code
```
$git add . 
$git commit -m'add comment about what was done'
$git push origin master
```
5. go back to terminal and type 'code .' to open VS studios
6. in terminal type 'yarn start' to start local server
7. double check that everything is working by inserting a header and seeing if it renders
# add any 3rd libraries you will be using 
```
$ yarn add axios
$ yarn add react-router-dom@6

```
# Basic react router  setup
1. make sure react-router-dom@6 is installed

```
$ yarn add react-router-dom@6

```
2. setup BrowserRouter in update index.js
```
import {BrowserRouter} from 'react-router-dom'; 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

```

