export default {
    getUsersList: () =>
        (dispatch, getState) => {
        dispatch({ type: 'USER_LIST_REQUEST' }),
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => dispatch({ type: 'USER_LIST_SUCCESS', payload: data })
                )
        }
}