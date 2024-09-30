import React, { useState } from 'react'
import Countries from './components/Countries'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails';
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Countries />}/>
        <Route path="/details/:name" element={<CountryDetails />}/>

      </Routes>
    </>
  )
}

export default App
