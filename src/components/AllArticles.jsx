import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleBox from "./ArticleBox";
import ArticleBoxes from "./ArticleBoxes.css"


export default function () {
    const [articles, setArticles] = useState([])
        useEffect(()=>{
            fetchArticles()
                .then(({data})=>{
                    setArticles(data.articles)
                })
        }, [])
        return (
            <div>
                <h1>Articles</h1>
                <ul className="AllArticles">
                {articles.map((article)=>{
                    return <ArticleBox key={article.article_id} article={article}/>
                })}
                </ul>
            </div>
            
        )
    }