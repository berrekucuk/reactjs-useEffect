import React from 'react'
import HomePage from './pages/HomePage'
import { Link, Routes,Route } from 'react-router-dom'
import List from './suppliers/List'
import Add from './suppliers/Add'
import Update from './suppliers/Update'
import Detail from './suppliers/Detail'
import NotFound from './pages/NotFound'
import ProductList from './products/ProductList'
import ProductAdd from './products/ProductAdd'
import ProductUpdate from './products/ProductUpdate'
import ProductDetail from './products/ProductDetail'

function App() {
  return <>
  <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <Link to="/">Home</Link>
    <Link to="/suppliers">Suppliers</Link>
    <Link to="/products">Products</Link>
  </ul>

  <Routes>
    <Route path="/" element= {<HomePage/>}/>
    <Route path='/suppliers' element={<List/>}/>
    <Route path='/suppliers/add' element={<Add/>}/>
    <Route path='/suppliers/update/:id' element={<Update/>}/>
    <Route path='/suppliers/detail/:id' element={<Detail/>}/>

    <Route path='/products' element={<ProductList/>}/>
    <Route path='/products/product-add' element={<ProductAdd/>}/>
    <Route path='/products/product-update/:id' element={<ProductUpdate/>}/>
    <Route path='/products/product-detail/:id' element={<ProductDetail/>}/>
    
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </>
}

export default App
