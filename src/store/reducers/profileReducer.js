const initState = {}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_SUCCESS':
            console.log('perfil actualizado')
            return state;
        case 'UPDATE_PROFILE_ERROR':
            console.log('error al actualizar perfil', action.err)
            return state;
        default:
            return state;
    }
}

export default profileReducer