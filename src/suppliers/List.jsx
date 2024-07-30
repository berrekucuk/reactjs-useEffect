import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function List() {

    const [suppliers, setsuppliers] = useState([])

    const navigate = useNavigate()

    useEffect(() =>{
        loadData()
    },[])

    const loadData = () =>{
        axios.get("https://northwind.vercel.app/api/suppliers")
            .then(res => setsuppliers(res.data))
    }

    const deleteSupplier = (id) =>{

        const result = window.confirm("Are u sure?")

        if(!result)
            return

        axios.delete("https://northwind.vercel.app/api/suppliers/" + id)
        .then(res => {
            loadData()
        })
    }

  return <>
  <button onClick={() => navigate('/suppliers/add')}>Add New Supplier</button>
  <hr/>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Detail</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
    </thead>
    <tbody>
        {
            suppliers.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td><Link to={`/suppliers/detail/${item.id}`}>Detail</Link></td>
                <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                <td><button onClick={() => navigate('/suppliers/update/'+ item.id)}>Update</button></td>
            </tr>)
        }
    </tbody>
  </table>
  </>
}

export default List