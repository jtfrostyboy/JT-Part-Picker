import { useState } from "react"
import axios from "axios"




export default function CreateReview() {

    const [title, setTitle] = useState('')
    const [part, setPart] = useState('')
    const [desc, setDesc] = useState('')

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handlePartChange(event) {
        setPart(event.target.value)
    }

    function handleDescChange(event) {
        setDesc(event.target.value)
    }


    function handleSubmit(event)  {
        const addReview = async() => {
            const response = await axios.post(`http://localhost:3001/review`, {
                title: title,
                part: part,
                description: desc
            })
            console.log(response.data)
        }
        addReview()
    }



    return(
        <div className="addReview">
            <form onSubmit={handleSubmit}>
                <h1>Create Review</h1>
                <label>
                    <input type="text" placeholder='Title' value={title} onChange={handleTitleChange} />
                </label>
                <label>
                    <input type="text" placeholder="Part" value={part} onChange={handlePartChange} />
                </label>
                <label>
                    Write your review
                    <textarea value={desc} onChange={handleDescChange} rows={4} cols={40}/>
                </label>
                <button type="reset">Reset</button>
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}