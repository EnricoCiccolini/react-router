import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function Post() {

    const [post, setPost] = useState({})
    const [load, setLoad] = useState(true)
    const [load2, setLoad2] = useState(true)
    const [prevId, setPrevId] = useState(0)
    const [nextId, setNextId] = useState(0)
    const [error, setError] = useState(null)
    const [nextPost, setNextPost] = useState(null)


    const { id } = useParams()



    // function getPost() {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then((res) => {
    //             setPost(res.data)
    //             setLoad(false)
    //             setPrevId(parseInt(id) - 1)
    //             setNextId(parseInt(id) + 1)
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             setError(true)
    //             setLoad(false)

    //         })


    // }


    function getPost() {


        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data)
                setLoad(false)


            })
            .catch(err => {
                console.error(err);
                setError(true)
                setLoad(false)

            })



    }
    function postNextFunction() {


        axios.get(`https://jsonplaceholder.typicode.com/posts/${parseInt(id) + 1}`)
            .then((res) => {
                setNextPost(true)

                setLoad2(false)
            })
            .catch(err => {
                setNextPost(false)
                setLoad2(false)



            })



    }






    useEffect(postNextFunction, [id])


    useEffect(getPost, [id])

    console.log(id)

    console.log(post)




    if (load || load2) {
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
                            {id > 0 ? <Link to={`/post-list/${parseInt(id) - 1}`}> post precedente  </Link> : ''}

                            {nextPost ? <Link to={`/post-list/${parseInt(id) + 1}}`}> post successivo  </Link> : ''}




                        </div>
                    </div>


                </div>
            }

        </>
    )
}

export default Post