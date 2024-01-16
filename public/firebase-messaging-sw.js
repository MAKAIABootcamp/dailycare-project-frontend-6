importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDHFrl4ZMMdc2dREdgON1splzuiUwart4",
  authDomain: "daily-care-504df.firebaseapp.com",
  projectId: "daily-care-504df",
  storageBucket: "daily-care-504df.appspot.com",
  messagingSenderId: "596409555335",
  appId: "1:596409555335:web:157644abefb30244db9b22",
  measurementId: "G-BYDFGL4KJK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

// Initial config to show notifications
messaging.onBackgroundMessage(payload => {
    console.log("Recibiste este mensaje mientras estabas ausente");
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./favicon.jpg" 
    }

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})