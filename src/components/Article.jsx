import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchArticle } from "../api"

export default function Article(){
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(()=>{
        fetchArticle(article_id).then(({data})=>{
            setArticle(data.article)
        })    
    }, [])

    return(
        <div>
            <h1>{article.title}</h1>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
        </div>
    )
}