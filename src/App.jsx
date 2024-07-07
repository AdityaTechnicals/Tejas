import React from 'react'
import './App.css'
import { Home } from './components/home/Home'
import { Results } from './components/results/Results'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import BarcodeDecoder from './components/barcode/nutritient'

import HomePage from './Landing';



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element ={<HomePage/>}/>
            <Route path="/scan" element={<Home/>}/>
            <Route path="/results" element={<Results/>}/>
            {/* <Route path = "/nutrient" element={<BarcodeDecoder/>} /> */}
            <Route path="*" element={<Navigate to="/"/>}/>
         
        </Routes>
    </BrowserRouter>
  )
}

export default App;