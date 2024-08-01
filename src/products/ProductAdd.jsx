import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductAdd() {

  const [quantityPerUnit, setquantityPerUnit] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState("")

  const navigate = useNavigate()

  const add = ()=>{
    axios.post("https://northwind.vercel.app/api/products",{
      quantityPerUnit,
      unitPrice,
      unitsInStock
    })
    .then(res => {
      navigate("/products")
    })
  }

  return <>
  <h1>Product New Supplier</h1>
  <div>
    <label htmlFor=''>Quantity Per Unit</label>
    <input type='text' onChange={(e) => setquantityPerUnit(e.target.value)}/>
  </div>
  <div>
    <label htmlFor=''>Unit Price</label>
    <input type='text' onChange={(e) => setunitPrice(e.target.value)}/>
  </div>
  <div>
    <label htmlFor=''>Unit In Stock</label>
    <input type='text' onChange={(e) => setunitsInStock(e.target.value)}/>
  </div>
  <div>
    <button onClick={add}>ADD</button>
  </div>
  </>
}

export default ProductAdd