export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // mkae async call to db
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}