import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { cobineReducers, combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer