// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import './sign-in.style.scss';

import { 
    // auth,
    // signInWithGoogleRedirect,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUnForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    //sign In With Google Redirect
    // useEffect( () => {
    //     const getRedirectResponse = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirectResponse();       
    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUnForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )   
}

export default SignIn