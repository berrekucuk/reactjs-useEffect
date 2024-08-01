import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function ProductUpdate() {

  const {id} = useParams()
  
  const [quantityPerUnit, setquantityPerUnit] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState("")

  const navigate = useNavigate()

  useEffect(() =>{
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => {
      setquantityPerUnit(res.data.quantityPerUnit)
      setunitPrice(res.data.unitPrice)
      setunitsInStock(res.data.unitsInStock)
    })
  },[])

  const update = () => {
    axios.put("https://northwind.vercel.app/api/products/" + id,{
      quantityPerUnit,
      unitPrice,
      unitsInStock
    })
    .then(res=>{
      navigate("/products")
    })
  }

  return <>
  <h1>Update Page</h1>
  <h1>Id : {id}</h1>
  <div>
    <label htmlFor=''>Quantity Per Unit</label>
    <input type='text' value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)}/>
  </div>
  <div>
    <label htmlFor=''>Unit Price</label>
    <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)}/>
  </div>
  <div>
    <label htmlFor=''>Unit In Stock</label>
    <input type='text' value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)}/>
  </div>
  <div>
    <button onClick={update}>UPDATE</button>
  </div>
  </>
}

export default ProductUpdate