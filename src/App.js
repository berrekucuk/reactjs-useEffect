import React from 'react'
import HomePage from './pages/HomePage'
import { Link, Routes,Route } from 'react-router-dom'
import List from './suppliers/List'
import Add from './suppliers/Add'
import Update from './suppliers/Update'
import Detail from './suppliers/Detail'
import NotFound from './pages/NotFound'

function App() {
  return <>
  <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <Link to="/">Home</Link>
    <Link to="/suppliers">Suppliers</Link>
  </ul>

  <Routes>
    <Route path="/" element= {<HomePage/>}/>
    <Route path='/suppliers' element={<List/>}/>
    <Route path='/suppliers/add' element={<Add/>}/>
    <Route path='/suppliers/update/:id' element={<Update/>}/>
    <Route path='/suppliers/detail/:id' element={<Detail/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
}

export default App
