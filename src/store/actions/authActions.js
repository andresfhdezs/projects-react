export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}

var  confirmar = () => {};

export const singInPhoneCode = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        confirmar
            .confirm(newUser.code)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR' }, err);
            });
    }
}

export const singInPhone = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    firebase.auth().submitPhoneNumberAuth();
                }
            }
        );
        firebase.auth().signInWithPhoneNumber(newUser.phoneNumber, provider)
            .then((resp) => {
                confirmar = resp
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

}

export const googleSignIn = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: resp.user.displayName.split(" ", 1).toString(),
                    lastName: '',
                    initials: resp.user.displayName[0],
                    photoURL: resp.user.photoURL
                }).then(() => {
                    dispatch({ type: 'GOOGLE_SIGNIN_SUCCESS' })
                })
                    .catch(err => {
                        dispatch({ type: 'GOOGLE_SIGNIN_ERROR', err })
                    });
            })

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                photoURL: '',
                initials: newUser.firstName[0] + newUser.lastName[0]
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            }).catch((err) => {
                console.log(err);
                dispatch({ type: 'SIGNUP_ERROR', err });
            });
        })
    }
}