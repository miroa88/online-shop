import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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

export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt    
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    // if exist just return userDocRef
    return userDocRef;
};