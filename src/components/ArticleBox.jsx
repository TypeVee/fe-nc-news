import { Outlet, Link } from "react-router-dom";
import ArticleBoxes from "./ArticleBoxes.css"

export default function ({article}) {
    return (
        <Link to={`/Article/${article.article_id}`}>
        <div className="Article">
            <img src={article.article_img_url} style={{width:"100%"}}alt="Article Image" />
            <p>{article.title}</p>
            <p>By {article.author}</p>
       </div>
       </Link>
    )
}