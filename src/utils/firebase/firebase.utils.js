import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);