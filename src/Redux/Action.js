export const addAsync = (type,payload) => {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({ type, payload})
        }, 3000)
    }
}