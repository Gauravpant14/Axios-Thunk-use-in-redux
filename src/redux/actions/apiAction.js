import axios from 'axios'
export const fetchUsersRequest = () => {
     return {
         type: 'FETCH_USERS_REQUEST'
     }
}

export const fetchUsersSuccess = users => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('http://localhost:8080/users')
        .then(response => {
            console.log(response.data)
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error))
            const errMsg = error.message
            dispatch(fetchUsersFailure(errMsg))
        })
    }
}