import React from "react"
import { Link } from "react-router-dom"


export default function Nav() {
    return(
        <div className="nav">
            <div>
                <Link className="navButton" to="/"> Home </Link>
                <Link className="navButton" to="/parts"> Parts </Link>
                <Link className="navButton" to="/builds"> Builds </Link>
                <Link className="navButton" to="/create"> Make Your Own </Link>
            </div>
        </div>
    )
}