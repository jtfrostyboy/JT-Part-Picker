import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header"



export default function BuildList() {
    const [builds, setBuilds] = useState()

    useEffect(() => {
        const getBuilds = async () => {
            const response = await axios.get(`http://localhost:3001/pcBuild`)
            setBuilds(response.data)
            console.log(response.data)
        }
        getBuilds()
    }, [])

    let navigate = useNavigate()

    const showBuild = (key) => {
        navigate(`${key}`)
    }


    return(
        <>
            <Header/>
            <div className="builds">
                <h2>List of Builds</h2>
                {
                    builds.map((build, key) => (
                        <div key={key} onClick={()=>showBuild(key)}>
                            <h2>{build.name}</h2>
                            <h4>CPU: {build.cpu}</h4>
                            <h4>GPU: {build.gpu}</h4>
                            <h4>RAM: {build.ram}</h4>
                            <h4>Storage: {build.storage}</h4>
                            <h4>Motherboard: {build.motherboard}</h4>
                            <h4>Power Supply: {build.powerSupply}</h4>
                            <h4>Case: {build.case}</h4>
                            <h3>Price: {build.totalPrice}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}