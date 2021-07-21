import * as actionType from '../constants/actionConstants'
import * as api from '../../api/apiRequests'

export const signIn = (formData, history) => async (dispatch) => {
// export const signIn = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)
        console.log(data, 'signin')
        dispatch({type: actionType.AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error)
        
    }
    
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        console.log(data,'signup')
        dispatch({type: actionType.AUTH, data})
        if (data.message === 'User already exists' ) {
            console.log('Existing user pop up')
        } else {
            history.push('/')
        }
    } catch (error) {
        console.log(error)
    }
    
}