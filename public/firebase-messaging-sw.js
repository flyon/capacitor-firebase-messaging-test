importScripts(
  'https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDXuLv8uRa7YTjzxhdV8sqnFid5q49MkLo',
  authDomain: 'spiritual-playmates-4102c.firebaseapp.com',
  projectId: 'spiritual-playmates-4102c',
  storageBucket: 'spiritual-playmates-4102c.appspot.com',
  messagingSenderId: '580968717451',
  appId: '1:580968717451:web:83ed4f1eb905bdd6ee088e',
  measurementId: 'G-33TSCJF0H0',
});
const messaging = firebase.messaging();
console.log('firebase sw');
