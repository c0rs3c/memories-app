import * as actionType from '../constants/actionConstants'
import * as api from '../../api/apiRequests'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts()
        console.log(data, 'getPost--actions')
        dispatch({
            type: actionType.GET_POSTS,
            payload: data
        })      
    } catch (error) {
        console.log(error)
    }
    
}

export const createPost = (postData) => async (dispatch) => {
    try {
        console.log('Going to create post', postData)
        const  { data }  = await api.createPost(postData)
        console.log(data, 'createPost---actions')

        dispatch ({
            type: actionType.CREATE_POST,
            payload: data
        })    
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (postData, id) => async (dispatch) => {
    try {
        console.log('Inside UPDATE Action')
        const { data } = await api.updatePost(postData, id)
        console.log(data)
        dispatch({
            type: actionType.UPDATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

}

export const deletePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.deletePost(id)
        console.log('DELETE POST ACTION')
        dispatch({
            type: actionType.DELETE_POST,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id)
        console.log('LIKE POST ACTION')
        dispatch({
            type: actionType.LIKE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}