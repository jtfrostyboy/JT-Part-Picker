import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function BuildDetail() {
    const [build, setBuild] = useState()
    let {id} = useParams()


    useEffect(() => {
        const getBuildDetail = async () => {
            const response = await axios.get(`http://localhost:3001/pcBuild/${id}`)
            setBuild(response.data)
            console.log(response.data)
        }
        getBuildDetail()
    },[])


    return build ? (
        <div className="buildDetail">
            <h2>{build.name}</h2>
            <h4>CPU: {build.cpu}</h4>
            <h4>GPU: {build.gpu}</h4>
            <h4>RAM: {build.ram}</h4>
            <h4>Storage: {build.storage}</h4>
            <h4>Motherboard: {build.motherboard}</h4>
            <h4>Power Supply: {build.powerSupply}</h4>
            <h4>Case: {build.case}</h4>
            <h3>Price: {build.totalPrice}</h3>
            <Link to="/builds">Return to Builds List</Link>
        </div>
    ) : <h3>Finding Build...</h3>
}