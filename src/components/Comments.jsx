import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Article.css"
import LoadingIcon from "./LoadingIcon"
import ncNewsApi from "../api"

export default function Comments({article_id, user}){
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        ncNewsApi.get(`/articles/${article_id}/comments`).then(({data})=>{
            setIsLoading(false)
            setComments(data)})
        
    }, [])
    const Comments = (
        comments.map((comment)=>{
            return <div id={comment.comment_id}>
                <hr/>
                <div style={{display:"flex", justifyContent:"space-between"}} >
                    <p style={{color:"cyan"}}>{comment.author}</p> 
                    <p style={{color:"white"}}>
                            Votes: {comment.votes}
                            <br/>
                            {new Date(comment.created_at).toISOString().substring(0, 10)} 
                            <br/>
                            {(user === comment.author ? <input type="submit" onClick={()=>{
                                deleteComment(comment.comment_id)    
                            }} value="Delete" /> : <></>)}
                    </p></div>
                    <br/>
                <p style={{textAlign:"left"}}>{comment.body}</p>
                </div>
        })
    )
    function deleteComment(id){
        ncNewsApi.delete(`/comments/${id}`).then(()=>{
            ncNewsApi.get(`/articles/${article_id}/comments`).then(({data})=>{
                setIsLoading(false)
                setComments(data)})
        })
        
    }

    return(
        <>
        <div className="CommentBox">
        <h1>Comments</h1>
        {isLoading ? LoadingIcon() : Comments}
        </div>
        </>
    )
}