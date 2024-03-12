import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Login from './Authentication/Login';
import SignUp from './Authentication/Singup';
import Signin from './Authentication/Signin';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/contact" element={<ContactForm/>} />
    <Route path="/services" element={<Service/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/signup' element={<SignUp />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
