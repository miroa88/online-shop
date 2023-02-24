import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiPzBU2kteeJ3I_-VYxPwQMB86fR1BrNY",
    authDomain: "fly-store-db.firebaseapp.com",
    projectId: "fly-store-db",
    storageBucket: "fly-store-db.appspot.com",
    messagingSenderId: "833726063971",
    appId: "1:833726063971:web:75ec3d9f5692c9c7a4df56"
};
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    // if user snapshot does not exist
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { 
                displayName,
                email,
                createdAt    ,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    // if exist just return userDocRef
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email , password) => {
    // return if do not receive email or password,  to protect app from calling 
    //createUserWithEmailAndPassword method. later this will be improved by using typeScript
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email , password) => {
    // return if do not receive email or password,  to protect app from calling 
    //createUserWithEmailAndPassword method. later this will be improved by using typeScript
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}