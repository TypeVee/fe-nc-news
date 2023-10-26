import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Article.css"
import LoadingIcon from "./LoadingIcon"
import ncNewsApi from "../api"

export default function Comments({article_id}){
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        ncNewsApi.get(`/articles/${article_id}/comments`).then(({data})=>{
            setIsLoading(false)
            setComments(data)
        console.log(typeof comments[0].created_at, comments[0].created_at)})
        
    }, [])
    const Comments = (
        comments.map((comment)=>{
            return <div>
                <hr/>
                <div style={{display:"flex", justifyContent:"space-between"}}><p style={{color:"cyan"}}>{comment.author}</p> <p style={{color:"white"}}>Votes: {comment.votes}<br/>{new Date(comment.created_at).toISOString().substring(0, 10)}</p></div><br/>
                <p style={{textAlign:"left"}}>{comment.body}</p>
                </div>
        })
    )

    return(
        <>
        <div className="CommentBox">
        <h1>Comments</h1>
        {isLoading ? LoadingIcon() : Comments}
        </div>
        </>
    )
}