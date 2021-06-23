import {app, auth} from "../firebase/firebase";
import { useEffect, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import 'firebase/auth'
import { setUserCookie } from '../firebase/userCookies'
import { mapUserData } from '../firebase/userCookies'

app()

const FirebaseAuthConfig= {
    signInFlow: 'popup',
    singInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({user}, redirectUrl) =>{
            const userData = mapUserData(user)
            setUserCookie(user)
        }
    }
}

const FirebaseAuth = () => {
    const [renderAuth, setrenderAuth] = useState(false)
    useEffect(() => {
        if(typeof window !== 'undefined'){
            setrenderAuth(true)
        }
    }, [])
    return(
        <div>
            {
            renderAuth ? (
                <StyledFirebaseAuth
                    uiConfig={FirebaseAuthConfig}
                    FirebaseAuth={firebase.auth()}
                />
            ): null
}
        </div>
    )
}

export default FirebaseAuth