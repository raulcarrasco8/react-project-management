import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../config/api";
import { useNavigate } from "react-router-dom";


function CreatePostPage() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            title: title,
            body: body
        }

        axios.post(`${BASE_URL}/posts`, newPost)
            .then(() => {
                console.log('succes, the post was created...')
                navigate("/posts")
            })
            .catch(e => console.log("Error creating a new post...", e))
    
    }

    return(
       <div className="CreatePostPage">
            <h3>Add Post</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Enter the title"
                        required
                        value={title}
                        onChange={(e) => {setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Body:
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Enter the description" 
                        value={body}
                        onChange={(e) => {setBody(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
       </div>


    )
    
}



export default CreatePostPage;