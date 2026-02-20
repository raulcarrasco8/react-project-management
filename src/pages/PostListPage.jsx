import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { BASE_URL } from "../config/api";



function PostListPage() {

    const[post, setPosts] = useState(null)

    useEffect(() => {
        axios.get(BASE_URL + "/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(err => console.log("Error getting post from the API...", err));
    }, [])


    if(post === null) {
        return <Loader />
    }
    

    return(
        <div>
            <h1>Post List Page</h1>
            <h2>Number of projects {post.length}</h2>

            {post.map((postObj) => {
                return (
                    <div className="card" key={postObj.id}>
                        <h3>{postObj.title}</h3>
                        <p>{postObj.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default PostListPage;