const firebaseConfig = {
    apiKey: "AIzaSyAUwAvZbQFc96i9jN5cJvvsQYeofNe5CDI",
    authDomain: "jcornersbadbank-75a0b.firebaseapp.com",
    databaseURL: "https://jcornersbadbank-75a0b-default-rtdb.firebaseio.com",
    projectId: "jcornersbadbank-75a0b",
    storageBucket: "jcornersbadbank-75a0b.appspot.com",
    messagingSenderId: "777397107516",
    appId: "1:777397107516:web:45127086b01a3ef9827c39",
    measurementId: "G-0XTB37SEWV"
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