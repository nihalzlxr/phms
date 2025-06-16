import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Studentsmenu from './Components/Studentsmenu'
import Adminhome from './Components/Adminhome'

function Router() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/studentsmenu' element={<Studentsmenu/>}/>
        <Route path='/studenthome' element={<Studentsmenu/>}/>
        <Route path='/adminhome' element={<Adminhome/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default Router