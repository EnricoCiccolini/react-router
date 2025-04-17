import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function Post() {

    const [post, setPost] = useState({})
    const [load, setLoad] = useState(true)
    const [prevId, setPrevId] = useState(0)
    const [nextId, setNextId] = useState(0)
    const [error, setError] = useState(null)

    const { id } = useParams()


    function getPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data)
                setLoad(false)
                setPrevId(parseInt(id) - 1)
                setNextId(parseInt(id) + 1)
            })
            .catch(err => {
                console.error(err);
                setError(true)
                setLoad(false)

            })


    }
    useEffect(getPost, [id])

    console.log(id)

    console.log(post)



    console.log(prevId)

    if (load) {
        return <div>
            <h2>caricamento in corso</h2>
        </div>
    }
    if (error) {
        return <div>
            <h2>erorre nella richiesta </h2>
        </div>
    }
    return (
        <>
            {
                <div key={post.id} className="card m-3" >
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <div className="d-flex justify-content-between">
                            {prevId > 0 ? <Link to={`/post-list/${prevId}`}> post precedente  </Link> : ''}
                            <Link to={`/post-list/${nextId}`}> post successivo  </Link>
                        </div>
                    </div>


                </div>
            }

        </>
    )
}

export default Post