import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleBox from "./ArticleBox";
import ArticleBoxes from "./ArticleBoxes.css"
import LoadingIcon from "./LoadingIcon";

export default function () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
        useEffect(()=>{
            fetchArticles()
                .then(({data})=>{
                    setIsLoading(false)
                    setArticles(data.articles)
                })
        }, [])
        return (
            <div>
                <h1>Articles</h1>
                <div>
                    
                </div>
                <ul className="AllArticles">
                {isLoading ? <LoadingIcon/> : articles.map((article)=>{
                    return <ArticleBox key={article.article_id} article={article}/>
                })}
                </ul>
            </div>
            
        )
    }