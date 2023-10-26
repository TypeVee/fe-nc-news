import axios from 'axios';

export const fetchArticles = (()=>{
    return axios.get("https://nc-news-sayb.onrender.com/api/articles")})
