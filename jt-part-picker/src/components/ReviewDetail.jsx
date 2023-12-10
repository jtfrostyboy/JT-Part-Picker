import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function ReviewDetail() {
    const [review, setReview] = useState()
    const [title, setTitle] = useState('')
    const [part, setPart] = useState('')
    const [desc, setDesc] = useState('')

    let navigate = useNavigate()

    let {id} = useParams()

    useEffect(() => {
        const getReviewDetail = async () => {
            const response = await axios.get(`http://localhost:3001/review/${id}`)
            setReview(response.data)
            setTitle(response.data.title)
            setPart(response.data.part)
            setDesc(response.data.description)
            console.log(response.data)
        }
        getReviewDetail()
    },[])

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handlePartChange(event) {
        setPart(event.target.value)
    }

    function handleDescChange(event) {
        setDesc(event.target.value)
    }
    


    function deleteTaskFunction(){
        const deleteTask = async() => {
          const response2 = await axios.delete(`http://localhost:3001/review/${id}`)
          console.log(response2)
        }
        deleteTask()
        navigate('/review')
    }

    function editTaskFunction(){
        setTitle()
        const editTask = async() => {
            const response3 = await axios.put(`http://localhost:3001/review/${id}`, {
                title: title,
                part: part,
                description: desc
            })
            
        }
        editTask()
        navigate('/review')
    }



    return review ? (
        <div className="reviewDetail">
            <form>
                <h1>Create Review</h1>
                <label>
                    <input type="text" placeholder='Title' defaultValue={review.title} onChange={handleTitleChange}/>
                </label>
                <label>
                    <input type="text" placeholder="Part" defaultValue={review.part} onChange={handlePartChange}/>
                </label>
                <label>
                    Write your review
                    <textarea defaultValue={review.description} onChange={handleDescChange} rows={4} cols={40}/>
                </label>
                <Link to="/review">Return to Review List</Link>
                <button onClick={()=> editTaskFunction()}>Update</button>
                <button onClick={()=> deleteTaskFunction()}>Delete</button>
            </form>
            
            
        </div>
    ) : <h3>Finding Review...</h3>
}