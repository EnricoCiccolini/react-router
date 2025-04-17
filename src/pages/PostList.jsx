import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function PostList() {

    const [post, setPost] = useState([])

    function getPost() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPost(res.data))

    }
    useEffect(getPost, [])
    const max = post.length

    console.log(post)
    return (
        <>


            <div className="container m-4">
                <h1>Lista dei post</h1>
                <div className="m-4">
                    {post.map((post) => (
                        <div key={post.id} className="card m-3" >
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <Link to={`/post-list/${post.id} `}> vai al post </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostList