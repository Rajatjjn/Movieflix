import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accordian from './MainPge/Accordion/Accordian';
import Nav from './MainPge/Nav/Nav';
import Middle from './MainPge/middle/Middle';
import Register from './components/Register/Register';
import MainHome from './MainPge/MainHome/MainHome';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RecoilRoot>
  <BrowserRouter>
     <Routes>
   
        <Route path="/" element={<MainHome/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Home' element={<App/>}/>
 
    </Routes>
   </BrowserRouter> 
  </RecoilRoot>

    

 {/* <Accordian/>  */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
