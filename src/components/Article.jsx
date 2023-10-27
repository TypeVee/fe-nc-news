import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"

import { fetchArticle } from "../api"
import LoadingIcon from "./LoadingIcon.jsx"
import "./Article.css"
import Comments from "./Comments"
import ncNewsApi from "../api"

export default function Article(){
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [votes, setVotes] = useState(1)
    const [voted, setVoted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetchArticle(article_id).then(({data})=>{
            setIsLoading(false)
            setArticle(data.article)
            setVotes(data.article.votes)
        })    
    }, [])
    function vote(up){
        ncNewsApi
        .patch(`/articles/${article_id}`, {inc_votes: (up.target.id === "voteUp" ? 1 : -1)})
        .then((response)=>{
            setVotes(response.data.votes) 
            setVoted(true)
        })
    }
    const Article = (
        <div>
        <h1>{article.title}</h1>
        <div className="ArticleContent">
        <div style={{float:"right",  margin:"10px", marginTop:"0px"}}>
            <div className="voting" style={{float:"right", marginLeft:"5px"}}>
                <button disabled={voted} onClick={vote} id="voteUp" className="VoteUp">Vote up</button>
                <br/>
                <p style={{color:"yellow"}}>{votes}</p>
                <button disabled={voted} onClick={vote} id="voteDown" className="VoteDown">Vote down</button>
            </div>
            <img src={article.article_img_url} style={{width:"30vw", height:"100%", float:"left"}}/>
            
        </div>
            <p className="ArticleText">{article.body}</p>
            
        </div>
        </div>
    )


    return(
        <div>
        {isLoading ? LoadingIcon() : Article}
        <div style={{clear:"right"}}></div>
        <Comments article_id={article_id}/>
        </div>
    )
}