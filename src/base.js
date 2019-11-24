import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrorrtKHUACtRdn-dwnfDLJsaABZWU5cA",
  authDomain: "climbing-training-app.firebaseapp.com",
  databaseURL: "https://climbing-training-app.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
