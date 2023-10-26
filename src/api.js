import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-sayb.onrender.com/api'
})

export const fetchArticles = (()=>{
    return ncNewsApi.get('/articles')})

export const fetchArticle = ((article_id)=>{
    return ncNewsApi.get(`articles/${article_id}`)})