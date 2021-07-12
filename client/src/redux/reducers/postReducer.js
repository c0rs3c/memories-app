import * as actionType from '../constants/actionConstants' 
const postReducer = (state=[], action) => {
    // console.log(action)
    switch (action.type) {
        case actionType.GET_POSTS:
            return action.payload
        case actionType.CREATE_POST:
            return [...state, action.payload]   
        case actionType.UPDATE_POST:
            return state.map((post) => {
                return(action.payload._id === post._id ? action.payload : post)
            })
        case actionType.DELETE_POST:
            return state.filter((post) => post._id !== action.payload)
        case actionType.LIKE_POST:
            return state.map((post) => {
                return(action.payload._id === post._id ? action.payload : post)
            })
        default:
            return state
    }
}
export default postReducer