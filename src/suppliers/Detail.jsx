import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'

function Detail() {

    //useParams => Sayfada parametre yakalamak için kullanılır.
    var {id} = useParams()

    const [supplier, setsupplier] = useState({})

    //useNavigate => Bir sayfadan diğerine gitmenizi sağlar.
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
            .then(res => setsupplier(res.data))
    },[])

    const goBack = () =>{
        navigate("/suppliers")
        //navigate("-1")
    }

  return <>
  <h1>Detail Page</h1>
  <button onClick={goBack}>Go BACK!</button>
  <hr/>
  <h2>Id : {id}</h2>
  <h2>Company Name : {supplier.companyName}</h2>
  <h2>Contact Name : {supplier.contactName}</h2>
  <h2>Contact Title: {supplier.contactTitle}</h2>
  <h2>Street : {supplier.address?.street}</h2>
  <h2>City : {supplier.address?.city}</h2>
  <h2>Country : {supplier.address?.country}</h2>
  </>
}

export default Detail