const initialState = {
    usersData: []
}

export default function users(state = initialState, action) {

    switch (action.type) {
        case 'USER_LIST_SUCCESS' :
        return { ...state, usersData: action.payload }
        default :
        return state
    }

}