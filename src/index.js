import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
//import Prac from './Prac_cleanup';
//import TDL from './ToDoList';
//import CoinTracker from './CoinTracker';
//import Movie from './Movie';
import Homfo_task1 from './Homfo_task1';
//import Homfo_task2 from './Homfo_task2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<Prac /> 
    //<TDL />  //ToDoList
    //<CoinTracker />
    //<Movie />
    //<Home />
    <Homfo_task1 />
    //<Homfo_task2 />
  //</React.StrictMode>
);

/* App.js를 React app에 실행시키는 코드
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App /> 
  //</React.StrictMode>
);
*/
