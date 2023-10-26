import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Article.css"
import LoadingIcon from "./LoadingIcon"


export default function Article({article_id}){
    const [comments, setComments] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        
    }, [])
    return(
        <div>
        <h1>Comments</h1>
        <LoadingIcon/>
        </div>
    )
}