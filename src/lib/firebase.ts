import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBx5Dzo7N3n9zwB6s6ELueJXa7rJnPcp5I",
  authDomain: "rl-custom-cabinets.firebaseapp.com",
  projectId: "rl-custom-cabinets",
  storageBucket: "rl-custom-cabinets.firebasestorage.app",
  messagingSenderId: "92374765527",
  appId: "1:92374765527:web:5eb686ab4447ff69cb4592"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
