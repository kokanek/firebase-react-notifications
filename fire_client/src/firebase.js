import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyBXAFWdnCz5SNYKJVXUC01Y70DhYgAgSqo",
  authDomain: "storemax-50908.firebaseapp.com",
  projectId: "storemax-50908",
  storageBucket: "storemax-50908.appspot.com",
  messagingSenderId: "606599051782",
  appId: "1:606599051782:web:e53a0dfd668450c729a187"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BH97plGjFleE6fvFuH_08jfyKG4GTXlZg4tdUcUAwwjOjL0xSPoKAdruBMhW0Qw9G6f7UvaL6yr1VyNbkUvjj8I'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});