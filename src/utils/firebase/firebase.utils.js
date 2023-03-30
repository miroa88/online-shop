import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const qry = query(collectionRef);
    const querySnapshot = await getDocs(qry);
    return querySnapshot.docs.map(docSnapShot => docSnapShot.data())
    
    // .reduce((acc, docSnapShot) => {
    //     const { title, items } = docSnapShot.data();
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // },{});

}

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

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback)
}


