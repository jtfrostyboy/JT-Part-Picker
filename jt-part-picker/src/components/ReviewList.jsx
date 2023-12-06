import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Header from "./Header"


export default function ReviewList() {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        const getReviews = async () => {
            const response = await axios.get(`http://localhost:3001/review`)
            setReviews(response.data)
            console.log(response.data)
        }
        getReviews()
    }, [])

    let navigate = useNavigate()

    const showReview = (key) => {
        navigate(`${key}`)
    }

    return reviews ? (
        <>
            <Header/>
            <div className="reviewList">
                <h2>All Reviews</h2>
                <div>
                    {reviews.map((review,key) => (
                        <div key={key} className="reviewCard" onClick={()=>showReview(review._id)}>
                            <h2>{review.title}</h2>
                            <h3>{review.part}</h3>
                            <h4>{review.description}</h4>
                        </div>
                    ))}
                </div>

            </div>
        
        </>
    ) : <h3>Loading Reviews...</h3>
}