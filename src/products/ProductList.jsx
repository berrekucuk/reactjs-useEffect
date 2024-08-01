import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProductList() {

    const [products, setproducts] = useState([])

    const navigate = useNavigate()

    useEffect (() =>{
        loadData()
    },[])

    const loadData = () =>{
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => setproducts(res.data))
    }

    const deleteProduct = (id) =>{

        const result = window.confirm("Are u sure?")

        if(!result)
            return

        axios.delete("https://northwind.vercel.app/api/products/" + id)
        .then(res => {
            loadData()
        })
    }

  return <>
  <button onClick={() =>{navigate("/products/product-add")}}>Add New Product</button>
  <hr/>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Unit In Stock</th>
            <th>Detail</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            products.map(item =><tr>
                <td>{item.id}</td>
                <td>{item.quantityPerUnit}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td><Link to={`/products/product-detail/${item.id}`}>Detail</Link></td>
                <td><button onClick={() => navigate("/products/product-update/"+item.id)}>Update</button></td>
                <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
            </tr>)
        }
    </tbody>
  </table>
  </>
}

export default ProductList