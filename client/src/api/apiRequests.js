import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'http://localhost:5000/post'

// export const getPosts = () => axios.get(url)
// export const createPost = (postData) => axios.post(url,postData)
// export const updatePost = (postData, id) => axios.patch(`${url}/${id}`, postData)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const getPosts = () => API.get('/post')
export const createPost = (postData) => API.post('/post',postData)
export const updatePost = (postData, id) => API.patch(`/post/${id}`, postData)
export const deletePost = (id) => API.delete(`/post/${id}`)
export const likePost = (id) => API.patch(`post/${id}/likePost`)

export const signUp = (formData) => API.post('/user/signup', formData)
export const signIn = (formData) => API.post('/user/signin', formData)