import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchArticle } from "../api"
import LoadingIcon from "./LoadingIcon.jsx"
import "./Article.css"

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
        <div className="ArticleContent">
        <img src={article.article_img_url} style={{width:"30vw", height:"100%", float:"right", margin:"15px", marginTop:"0px"}}/>
            <p className="ArticleText">{article.body}</p>
            
        </div>
        </div>
    )


    return(
        <div>
        {isLoading ? LoadingIcon() : Article}
        </div>
    )
}