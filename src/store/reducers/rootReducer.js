import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import profileReducer from "./profileReducer";
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    profile: profileReducer,   
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer