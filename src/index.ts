// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-_ABa1Sg_tx2Wo4vMA_uxeFuINRd0vpM",
    authDomain: "fallout-4-char-builder.firebaseapp.com",
    projectId: "fallout-4-char-builder",
    storageBucket: "fallout-4-char-builder.appspot.com",
    messagingSenderId: "1048070214990",
    appId: "1:1048070214990:web:ed38062469e4466ed83a1f",
    measurementId: "G-BBNCJS219D"
};

const init = (): void => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});