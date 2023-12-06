import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"


export default function ReviewDetail() {
    const [review, setReview] = useState()
    let {id} = useParams()

    useEffect(() => {
        const getReviewDetail = async () => {
            const response = await axios.get(`http://localhost:3001/review/${id}`)
            setReview(response.data)
            console.log(response.data)
        }
        getReviewDetail()
    },[])

    return review ? (
        <div className="reviewDetail">
            <h1>{review.title}</h1>
            <h2>{review.part}</h2>
            <h3>{review.description}</h3>
            <Link to="/review">Return to Review List</Link>
        </div>
    ) : <h3>Finding Review...</h3>
}