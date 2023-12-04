import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function PartDetail() {
    const [part, setPart] = useState()
    let {id} = useParams()
    


    useEffect(() => {
        const getPartDetail = async () => {
            const response = await axios.get(`http://localhost:3001/parts/${id}`)
            setPart(response.data)
            console.log(response.data)
        }
        getPartDetail()
    },[])


    return part ? (
        <div className="partDetail">
            <h2>Name: {part.name}</h2>
            <h3>Type: {part.type}</h3>
            <h3>Price: {part.price}</h3>
            <Link to="/parts">Return to Parts List</Link>           
        </div>
    ) : <h3>Finding Part...</h3>
}