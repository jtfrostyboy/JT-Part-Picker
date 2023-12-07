import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { InputText } from "primereact/inputtext"
import { FilterMatchMode } from "primereact/api"



export default function PartList() {
    const [parts, setParts] = useState([])
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS}
    })
    

    useEffect(() => {
        const getParts = async () => {
            const response = await axios.get(`http://localhost:3001/parts`)
            setParts(response.data)
            console.log(response.data)
        }
        getParts()
    }, [])

    let navigate = useNavigate()

    const showPart = (key) => {
        navigate(`${key}`)
    }
    
    
    
    return parts ? (
        <>
            <Header/>
            <div className="partList">
                <h2>All Parts</h2>
                <div className="partCard">
                    <InputText
                        onInput={(e)=>setFilters({
                            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
                        })}
                    />
                    <DataTable value={parts} filters={filters} paginator rows={5} rowsPerPageOptions={[1,5,10]} totalRecords={parts.length} removableSort selectionMode="single" onRowDoubleClick={(e)=>showPart(e.data._id)}> 
                        <Column field="name" header="Name" sortable />
                        <Column field="type" header="Type" sortable />
                        <Column field="price" header="Price" sortable />
                    </DataTable>
                </div>
            </div>            
        </>
    ): (
        <h3>Loading Parts...</h3>
    )
}

