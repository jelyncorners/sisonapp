const firebaseConfig = {
    apiKey: "AIzaSyAPAZZy_saBmo4kioORW7lNnIw3S49b9aY",
  authDomain: "sisonfirebase.firebaseapp.com",
  projectId: "sisonfirebase",
  storageBucket: "sisonfirebase.appspot.com",
  messagingSenderId: "747239577497",
  appId: "1:747239577497:web:c387388939a73f5627a508"
};

try {
    firebase.initializeApp(firebaseConfig);
    console.log('It works!');
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('It does not work', err.stack);
    }
  }
  
  // const fire = firebase;
