import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Post() {

    const [post, setPost] = useState({})
    const [load, setLoad] = useState(true)

    const { id } = useParams()

    function getPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) =>
                setPost(res.data))
        setLoad(false)

    }
    useEffect(getPost, [])

    console.log(id)

    console.log(post)

    if (load) {
        return <div>
            <h2>caricamento in corso</h2>
        </div>
    }
    return (
        <>
            {
                <div key={post.id} className="card m-3" >
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            }






            {/* <div className="container m-4">
                <h1>post {id}</h1>
                <div className="m-4">
                    {post.map((post) => (
                        <div key={post.id} className="card m-3" >
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    )
}

export default Post