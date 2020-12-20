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

export const getToken = () => {
  return messaging.getToken({vapidKey: 'BH97plGjFleE6fvFuH_08jfyKG4GTXlZg4tdUcUAwwjOjL0xSPoKAdruBMhW0Qw9G6f7UvaL6yr1VyNbkUvjj8I'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token: ', currentToken);
      // sendTokenToServer(currentToken);
      // updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No registration token available. Request permission to generate one.');
      // Show permission UI.
      // updateUIForPushPermissionRequired();
      // setTokenSentToServer(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // showToken('Error retrieving registration token. ', err);
    // setTokenSentToServer(false);
  });
}

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      alert(JSON.stringify(payload));
      resolve(payload);
    });
});