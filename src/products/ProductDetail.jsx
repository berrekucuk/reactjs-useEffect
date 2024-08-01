import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

    var {id} = useParams()

    const navigate = useNavigate()

    const [product, setproduct] = useState({})

    useEffect(() =>{
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
        .then(res =>setproduct(res.data))
    },[])

    const goBack = () =>{
        navigate('/products')
    }

  return <>
  <h1>Detail Page</h1>
  <button onClick={goBack}>Go BACK!</button>
  <hr/>
  <h2>Id : {product.id}</h2>
  <h2>Quantity Per Unit : {product.quantityPerUnit}</h2>
  <h2>Unit Price : {product.unitPrice}</h2>
  <h2>Units In Stock : {product.unitsInStock}</h2>
  </>
}

export default ProductDetail