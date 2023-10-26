import { Outlet, Link } from "react-router-dom";
import ArticleBoxes from "./ArticleBoxes.css"

export default function ({article}) {
    return (
        
        <div className="Article">
            <Link to={`/Article/${article.article_id}`}>
            <img src={article.article_img_url} style={{height:"20vh"}}alt="Article Image" />
            <p>{article.title}</p>
            </Link>
       </div>
    )
}