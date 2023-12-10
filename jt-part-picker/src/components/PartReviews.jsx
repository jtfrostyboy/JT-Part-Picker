import { useNavigate, useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function PartReviews() {

    let {name} = useParams()
    const [reviews, setReviews] = useState()
    let navigate = useNavigate()

    console.log(name)

    useEffect(() => {
        const getReviews = async () => {
            const response = await axios.get(`http://localhost:3001/review`)
            setReviews(response.data)
            console.log(response.data)
        }
        getReviews()
    }, [])

    const showReview = (key) => {
        navigate(`/review/${key}`)
    }



    return reviews ?(
        <>
            <div>
                {reviews.filter(review => review.part == name).map((review,key) => (
                    <div key={key} className="reviewCard" onClick={()=>showReview(review._id)}>
                        <h2>{review.title}</h2>
                        <h3>{review.part}</h3>
                        <h4>{review.description}</h4>
                    </div>
                ))}
            </div>
            <Link to="/parts">Return to Parts List</Link>           
        </>
    ) : <h3>No Review Yet</h3>
}