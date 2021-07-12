import axios from 'axios'

const url = 'http://localhost:5000/post'

export const getPosts = () => axios.get(url)
export const createPost = (postData) => axios.post(url,postData)
export const updatePost = (postData, id) => axios.patch(`${url}/${id}`, postData)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)