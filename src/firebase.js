import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrorrtKHUACtRdn-dwnfDLJsaABZWU5cA",
  authDomain: "climbing-training-app.firebaseapp.com",
  databaseURL: "https://climbing-training-app.firebaseio.com",
  projectId: "climbing-training-app",
  storageBucket: "climbing-training-app.appspot.com",
  messagingSenderId: "224383358674",
  appId: "1:224383358674:web:e28882e44016e346957f0b"
};
export { firebaseConfig };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
