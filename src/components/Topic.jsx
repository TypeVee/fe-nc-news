import { useEffect, useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import ncNewsApi from "../api"
import LoadingIcon from "./LoadingIcon"
import "./ArticleBoxes.css"
import ArticleBox from "./ArticleBox"

export default function () {
    const [topic, setTopic] = useState(useParams().topic)
    const [isLoading, setIsLoading] = useState(true)
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        ncNewsApi.get('/topics')
        .then(({data})=>{
            setTopics(data)
            setIsLoading(false)
        })}, [])

    useEffect(()=>{
        // if(topics.some(({slug})=>slug !== topic)){
        //     <Navigate to="/Topics" replace={true} />
        // }
        }, [topics])

    useEffect(()=>{
        if(topic !== undefined){
            ncNewsApi.get(`/articles?topic=${topic}`).then(({data})=>{
                setArticles(data.articles)
            })
        }
        }, [topic])
        useEffect(()=>{
            console.log(articles)
            }, [articles])
    const TopicSelection = (({topic})=>
        <Link to={"/Topics/" + topic.slug} onClick={()=>setTopic(topic.slug)} className="TopicBox">
            <h2>{topic.slug.slice(0, 1).toUpperCase() + topic.slug.slice(1)}</h2>
            <p style={{fontStyle:"italic"}}>{topic.description}</p>
        </Link>
        
    )

    return (
        <div>
        <ul className="AllTopics">
        {isLoading ? <LoadingIcon/>: topics.map((topic, index)=>{
            return <TopicSelection topic={topic} key={index}/> 
        })}
        </ul>
        {topic === undefined ? <p>Select a topic</p> : topic.slice(0, 1).toUpperCase() + topic.slice(1)}
        <hr></hr>
        <ul className="AllArticles">
        {articles.length > 0 ? articles.map((article)=>{
                    return <ArticleBox key={article.article_id} article={article}/>
                }) 
                : 
                <></>
            }
        </ul>
        
       </div>
    )
}