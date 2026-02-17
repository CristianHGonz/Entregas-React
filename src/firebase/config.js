import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA6LfVITUvxbkQYKj74WuEsZU4MB5PX0Lk",
    authDomain: "ecommerce-db-12eee.firebaseapp.com",
    projectId: "ecommerce-db-12eee",
    storageBucket: "ecommerce-db-12eee.firebasestorage.app",
    messagingSenderId: "995176576211",
    appId: "1:995176576211:web:c9186f6ebf72a158a05026"
};

export const app = initializeApp(firebaseConfig);