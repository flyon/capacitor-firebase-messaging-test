import * as React from 'react';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import './style.css';

const initializeFirebase = () => {
  if (Capacitor.isNativePlatform()) {
    return;
  }
  return initializeApp({
    apiKey: 'AIzaSyDXuLv8uRa7YTjzxhdV8sqnFid5q49MkLo',
    authDomain: 'spiritual-playmates-4102c.firebaseapp.com',
    projectId: 'spiritual-playmates-4102c',
    storageBucket: 'spiritual-playmates-4102c.appspot.com',
    messagingSenderId: '580968717451',
    appId: '1:580968717451:web:83ed4f1eb905bdd6ee088e',
    measurementId: 'G-33TSCJF0H0',
  });
};
//initialize firebase right at the start before the component renders
let app = initializeFirebase();
console.log('app', app);

let reqPermission, token;
export default function App() {
  const getTokenFirebase = async (messaging) => {
    const options: any = {
      vapidKey:
        'BIuVgsK5OlP-rh_ViyLg1Su98GALUTLFbCf6QypEqkBfXtnPj9QUGkA-ALLkt28wJwCH1g-V4xS-NK12phVXh5E',
    };
    if (Capacitor.getPlatform() === 'web') {
      console.log('register');
      options.serviceWorkerRegistration = await navigator.serviceWorker
        .register('firebase-messaging-sw.js')
        .catch((err) => {
          console.warn('Could not register', err.message);
        });
      console.log('web', options.serviceWorkerRegistration);
    }
    console.log('getToken()');
    const { token } = await messaging.getToken(options);
    console.log('finished');
    return token;
  };

  //the code inside this function will run once, after the component has rendered
  React.useEffect(() => {
    console.log('component rendered, importing @capacitor-firebase/messaging');
    // Dynamically import the module AFTER initializeApp, when the component has already rendered
    import('@capacitor-firebase/messaging').then(async (module) => {
      // reqPermission = module.FirebaseMessaging.requestPermissions();
      console.log('@capacitor-firebase/messaging imported, requesting token');
      token = await getTokenFirebase(module.FirebaseMessaging);
      console.log('token', token);
    });
  }, []);

  return (
    <div>
      <p>Firebase Capacitor Test</p>
    </div>
  );
}
