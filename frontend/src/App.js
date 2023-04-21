import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'
import Data from './Pages/Demo/Data'
import Check from './Pages/Demo/Check'
import Mitigate from './Pages/Demo/Mitigate'
import Compare from './Pages/Demo/Compare'
import Resources from './Pages/Resources'
import APIdocs from './Pages/APIdocs'
import Header from './Components/Header';
import './main.css'
function App() {
  
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/demo" element={<Data/>} />
          <Route path="/demo/check" element={<Check/>} />
          <Route path="/demo/mitigate" element={<Mitigate/>} />
          <Route path="/demo/compare" element={<Compare/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/apidocs" element={<APIdocs />} />
      </Routes>
      </BrowserRouter>
      )  
    
  
}

export default App;
