import {trTR} from '@mui/x-data-grid/locales'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SuppliersDataGrid() {

    const [suppliers, setsuppliers] = useState([])

    useEffect(() =>{
        axios.get("https://northwind.vercel.app/api/suppliers")
        .then(res => setsuppliers(res.data))
    })

    const columns = [
        {
            field : "companyName",
            headerName : "Company Name",
            flex : 0.4
        },
        {
            field : "contactName",
            headerName: "Contact Name",
            flex: 0.3
        },
        {
            field: "contactTitle",
            headerName: "Contact Title",
            flex: 0.3
        }

    ]

  return <>
  <div style={{height:500}}>
    <DataGrid
        rows={suppliers}
        columns={columns}
        slots={{toolbar: GridToolbar}}
        slotProps={{
            toolbar: {
                showQuickFilter: true,
            },
        }}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
    /> 

  </div>
  </>
}

export default SuppliersDataGrid