const initialState = {
    usersData: []
}

export default function users(state = initialState, action) {

    switch (action.type) {
        case 'SAMPLE_ACTION_DISPATCHED' :
        return { ...state, usersData: action.payload }
        default :
        return state
    }

}