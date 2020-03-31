const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'GOOGLE_SIGNIN_SUCCESS':
            console.log('login with google success');
            return {
                ...state,
                authError: null
            }
        case 'GOOGLE_SIGNIN_ERROR':
            console.log('login with google error');
            return {
                ...state,
                authError: 'login with google error'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state
    }
};

export default authReducer;