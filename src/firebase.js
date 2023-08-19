import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaXOawVmJJHP43S1HR1hzX_QCGZboEQIA",
  authDomain: "netflix-87397.firebaseapp.com",
  projectId: "netflix-87397",
  storageBucket: "netflix-87397.appspot.com",
  messagingSenderId: "494104901913",
  appId: "1:494104901913:web:c187331926decebbb16d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;