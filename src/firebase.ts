import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_mbmnlyKouCoyW4vMKYBjnX-B4bz5Ohw",
  authDomain: "likes-memo.firebaseapp.com",
  databaseURL: "https://likes-memo.firebaseio.com",
  projectId: "likes-memo",
  storageBucket: "likes-memo.appspot.com",
  messagingSenderId: "552766642801",
  appId: "1:552766642801:web:bdae0cd39697c9ab6659d0",
  measurementId: "G-X4KR646M2C"
};

firebase.initializeApp(config);

export default firebase;
