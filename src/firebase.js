import firebase from 'firebase/app';
import "firebase/firestore";

  
var firebaseConfig = {  
    /* 
    replace this object with yours 
    */  
    apiKey: "AIzaSyCzYUGyMXr9lTDbnBONg1GuKPguvCXj39Q",
    authDomain: "unicode-chrome-extension.firebaseapp.com",
    projectId: "unicode-chrome-extension",
    storageBucket: "unicode-chrome-extension.appspot.com",
    messagingSenderId: "778900654786",
    appId: "1:778900654786:web:a1569be4d09ebb283d495b",
    measurementId: "G-SPB9FR7NCN"
};  
  
// Initialize Firebase  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
