import React from 'react'
import {Router, Route, Navigate, Routes} from "react-router-dom"

import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Signin from '../auth/SignIn';

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/tours' element={<Tours/>}/> 
            <Route path='/tours/:id' element={<TourDetails/>}/> 
            {/* <Route path='/login' element={<Login/>}/>  */}
            {/* <Route path='/register' element={<Register/>}/>  */}
            <Route path='/tours/search' element={<SearchResultList/>}/> 
            <Route path='/login' element={<Signin/>}/>
        </Routes>
  )
}

export default Routers;