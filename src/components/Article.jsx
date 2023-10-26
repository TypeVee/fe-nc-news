import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchArticle } from "../api"
import LoadingIcon from "./LoadingIcon.jsx"

export default function Article(){
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetchArticle(article_id).then(({data})=>{
            console.log("Loading")
            setIsLoading(false)
            setArticle(data.article)
        })    
    }, [])
    const Article = (
        <div>
        <h1>{article.title}</h1>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        </div>
    )


    return(
        <div>
        {isLoading ? LoadingIcon() : Article}
        </div>
    )
}