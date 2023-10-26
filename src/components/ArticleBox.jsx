import { Outlet, Link } from "react-router-dom";
import ArticleBoxes from "./ArticleBoxes.css"

export default function ({article}) {
    return (
        <div className="Article">
        <Link to={`/Article/${article.article_id}`}>
        <div >
            <img src={article.article_img_url} style={{ maxHeight:"100%", width:"20vw"}}alt="Article Image" />
            <p>{article.title}</p>
            <p>By {article.author}</p>
       </div>
       </Link>
       </div>
    )
}