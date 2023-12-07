export default function CreateReview() {
    return(
        <div className="addReview">
            <form>
                <h1>Create Review</h1>
                <label>
                    <input type="text" placeholder='Title' />
                </label>
                <label>
                    Write your review
                    <textarea rows={4} cols={40}/>
                </label>
                <button type="reset">Reset</button>
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}