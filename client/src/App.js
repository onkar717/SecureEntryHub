import React, { createContext, useReducer } from "react";
import './index.css'
import Header from "./components/Header";
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service';
import Profile from './components/Profile';
import ContactForm from './components/ContactForm';
import Login from './Authentication/Login';
import SignUp from './Authentication/Singup';
import Signin from './Authentication/Signin';
import { Route, Routes } from "react-router-dom";
import { reducer } from "./Reducer/reducer";

export const usercontext = createContext()

const Routing = () => {
  return (
<>
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
</>
)
}

function App() {
  
  const [state, dispatch] = useReducer(reducer , {

  })
 
  return (
    <>
    <usercontext.Provider value={{state, dispatch}}>

      <Header />
      <Routing />

    </usercontext.Provider>
    </>
  );
}
export default App;
