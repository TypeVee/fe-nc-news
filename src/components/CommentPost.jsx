
import ncNewsApi from "../api";
import "./Article.css";
import Comments from "./Comments"
import { useState, useEffect } from "react";

export default function ({article_id}) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")
    const [signedIn, setSignedIn] = useState(false)
    const [postedComment, setPostedComment] = useState(false)
    const [signInClass, setSignInClass] = useState("Default")
    const [userError, setUserError] = useState("")
    useEffect(()=>{
        ncNewsApi('/users').then(({data})=>{
            setUsers(data)
        })
    }, [])
    function checkUser(event){
        event.preventDefault()
        if(users.some((profile)=>profile.username === event.target[0].value)){
            setUser(event.target[0].value)
            setSignedIn(true)
            setUserError("")
        }
        else{
            console.log(users.some((profile)=>profile.username === event.target[0].value))
            setSignInClass("InvalidInput")
            if(users.length === 0) setUserError("Please wait")
            else setUserError("Invalid Username")
        }
    }
    function postComment(event){
        event.preventDefault()
        ncNewsApi.post(`/articles/${article_id}/comments`, {username:user, body: event.target[0].value}).then(({data})=>{
            setPostedComment(true)
        })
    }

    const inputUser = (
        <div>
        <p>To comment, please sign in with a valid account:</p>
        <form onSubmit={checkUser} className={"UserForm"}>
            <label>Username: 
            <input type="text" name="username" className={signInClass}></input>
            </label>
            <input type="submit" value="Sign in" ></input>
        </form>
        <p>{userError}</p>
        </div>
    )
    const inputComment = (
        <div>
        <form onSubmit={postComment}>
        <p>Comment</p>
        <input type="text" style={{width:"100%"}} name="comment"></input>
        <input type="submit" value="Post comment" ></input>
        </form>
        <p>{userError}</p>
        </div>
    )
    const comment = (
        <div>
            <p>Posted!</p>
        </div>
    )
    

    return (
        <div>
        <div style={{alignItems:"start"}}>
            {(postedComment? comment : signedIn ? inputComment : inputUser)}
        </div>
        <div>
            <Comments article_id={article_id} user={user}/>
        </div>
        </div>
    )
}