export const updateProfile = (updateUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        firebase.auth().currentUser.updateProfile({
            displayName: updateUser.firstName + ' ' + updateUser.lastName
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            return firestore.collection('users').doc(authorId).set({
                firstName: updateUser.firstName,
                lastName: updateUser.lastName,
                // photoURL: '',
                initials: updateUser.firstName[0] + updateUser.lastName[0]
            }).then(() => {
                dispatch({ type: 'UPDATE_PROFILE_SUCCESS' });
            }).catch((err) => {
                console.log(err);
                dispatch({ type: 'UPDATE_PROFILE_ERROR', err });
            });
        }).catch(err => {
            console.log(err)
        }

        )
    }
}

export const updateProfileEmail = (updateUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        firebase.auth().currentUser.updateEmail(
            updateUser.email
        ).then(() => {
            dispatch({ type: 'UPDATE_PROFILE_SUCCESS' });
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'UPDATE_PROFILE_ERROR', err });
        });
    }
}