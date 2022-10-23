import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Configuration/Firebase.init';
import AlarMessage from '../Hooks/AlartMessage';


export const AuthUser = createContext();
const auth = getAuth(app)
const provaider = new GoogleAuthProvider();
const { successMessage } = AlarMessage()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setErro] = useState('');

    //login & signUp f:
    const googlelogin = () => signInWithPopup(auth, provaider);
    const createUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginWithEmail = (email, pass) => loginWithEmail(auth, email, pass);
    const logutOut = () => signOut(auth).then(re => successMessage('Logut Successfull'))

    //Update user information :
    const varifymail = () => sendEmailVerification(auth.currentUser);
    const updatePassword = (email) => sendPasswordResetEmail(auth, email).then(re => setErro('Email sand In Your MaIl'))

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsuscribe();
    }, [])
    const authInfo = {
        user, setUser, error, setErro,
        googlelogin, createUser, loginWithEmail, logutOut,
        varifymail, updatePassword
    }
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;