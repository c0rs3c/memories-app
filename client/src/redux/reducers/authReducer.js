import * as actionType from '../constants/actionConstants' 

const authReducer = (state = {authData: null}, action) => {
    try {
        switch (action.type) {
            case actionType.AUTH:
                // console.log(action.data, 'AUTH-REDUCER')
                console.log({...action.data})
                console.log(JSON.stringify(action.data))
                localStorage.setItem('profile', JSON.stringify(action.data))
                return {...state, authData: action.data}

            case actionType.LOG_OUT:
                localStorage.clear()
                return {...state, authData: null}
        
            default:
                return state
        }
        
    } catch (error) {
        console.log(error)
    }
}

export default authReducer