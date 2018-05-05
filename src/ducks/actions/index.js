import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = process.env.REACT_APP_API_KEY

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return{
        type: FETCH_POSTS,
        payload: request
    }
}