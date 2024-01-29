import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./page/DashBoard";
import reportWebVitals from "./reportWebVitals";
import Header from './page/header';
import Click from './page/click';
import Page3 from "./page/page3";
import Profile from "./page/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>  
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/history" element={<Click/>} />
        <Route path="/datasensor" element={<Page3/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
