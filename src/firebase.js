import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYQQXIAKWodtI5Atghc2NY7uWenuFLV0M",
  authDomain: "sandbox-ppms.firebaseapp.com",
  databaseURL: "https://sandbox-ppms-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sandbox-ppms",
  storageBucket: "sandbox-ppms.appspot.com",
  messagingSenderId: "875961082996",
  appId: "1:875961082996:web:300ac1f466bd71c9489d21"
}

// firebase init
const app = initializeApp(firebaseConfig)

// init fire store
export const db = getFirestore(app)




