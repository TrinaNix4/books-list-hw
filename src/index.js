import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Books from './pages/Books'; 
import About from './pages/About'; 
import DataSource from "./Source/BookSource"
//import NewBook from "./Source/NewBook"

ReactDOM.render(
<DataSource> 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >

        <Route path= '/Books' element={<Books/>} />
        <Route path= '/Books' element={<Books/>} />
        <Route path= '/About' element={<About/>} />
      </Route>
      </Routes>
  </BrowserRouter>
</DataSource>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
