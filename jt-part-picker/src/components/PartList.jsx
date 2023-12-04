import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header"




export default function PartList() {
    const [parts, setParts] = useState()

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
                <div>
                    {parts.map((part,key) => (
                        <div key={key} className="partCard" onClick={()=>showPart(key)}>
                            <h2>{part.name}</h2>
                            <h3>{part.type}</h3>
                            <h3>{part.price}</h3>

                        </div>
                    ))}
                </div>
            </div>            
        </>
    ): (
        <h3>Loading Parts...</h3>
    )
}