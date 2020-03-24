import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrorrtKHUACtRdn-dwnfDLJsaABZWU5cA",
  authDomain: "climbing-training-app.firebaseapp.com",
  databaseURL: "https://climbing-training-app.firebaseio.com"
};
export { firebaseConfig };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
