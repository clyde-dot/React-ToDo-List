import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD-PkBjUvViYF-E-sLZOnu0RogFpSnue5U",
    authDomain: "react-todo-d7ff1.firebaseapp.com",
    projectId: "react-todo-d7ff1",
    storageBucket: "react-todo-d7ff1.appspot.com",
    messagingSenderId: "78064230479",
    appId: "1:78064230479:web:663b13034be350eedaca3a",
    measurementId: "G-1YM5W4EHSD",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
