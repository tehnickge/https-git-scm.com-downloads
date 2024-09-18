import { useEffect, useState } from "react";

const CommentComponent =() => {
    const [comments, setComments] = useState({})

    useEffect(() =>{
        fetch("127.0.0.1:3001/sex").then((res) => res.json()).then((data)=> {
            console.log(data)
        })
    }, [])






    return(
        <div>sexxx</div>
    )
}

export default CommentComponent;