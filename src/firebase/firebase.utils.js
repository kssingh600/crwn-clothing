import firebase from 'firebase/app' ;
import 'firebase/firestore' ;
import 'firebase/auth' ;

const config = {
    apiKey: "AIzaSyCbMQ9jjk4WIwwNI6aehgGtjdD2N7E-0ro",
    authDomain: "crwn-db-445be.firebaseapp.com",
    projectId: "crwn-db-445be",
    storageBucket: "crwn-db-445be.appspot.com",
    messagingSenderId: "385748578730",
    appId: "1:385748578730:web:5258c8b97aa091ac1e7bd3",
    measurementId: "G-Y735D6S45X"
  } ;

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`) ;

    const snapShot = await userRef.get() ;

    if(!snapShot.exists){
      const { displayName, email } = userAuth ;
      const createdAt = new Date() ;

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      }catch (error) {
        console.log('error creating user', error.message) ;
      }
    }
    return userRef ;
  } 

 
firebase.initializeApp(config) ;

export const auth = firebase.auth() ;
export const firestore = firebase.firestore() ;

const provider = new firebase.auth.GoogleAuthProvider() ;
provider.setCustomParameters({ prompt : 'select_account' }) ;
export const signInWithGoogle = () => auth.signInWithPopup(provider) ;

export default firebase ;