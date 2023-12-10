import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"


export default function PartDetail() {
    const [part, setPart] = useState()
    let {id} = useParams()
    let navigate = useNavigate()


    useEffect(() => {
        const getPartDetail = async () => {
            const response = await axios.get(`http://localhost:3001/parts/${id}`)
            setPart(response.data)
            console.log(response.data)
        }
        getPartDetail()
    },[])

    const showReview = (key) => {
       navigate(`${key}`)
    }

    return part ? (
        <div className="partDetail">
            <h2 className="partName">Name: {part.name}</h2>
            <h3 className="partType">Type: {part.type}</h3>
            <h3 className="partPrice">Price: {part.price}</h3>
            <button className="reviewButton" onClick={()=>showReview(part.name)}>Reviews</button>
            <Link className="returnLink" to="/parts">Return to Parts List</Link>           
        </div>
    ) : <h3>Finding Part...</h3>
}