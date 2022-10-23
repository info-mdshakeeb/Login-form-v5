import { getAuth } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { app } from '../Configuration/Firebase.init';


export const AuthUser = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState('shakeeb')


    const authInfo = { user }

    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;