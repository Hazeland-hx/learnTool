// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDO28bKdG5tpw_BrM0own5jzcZnie1TnWA",
    authDomain: "best-learning-tool-21387.firebaseapp.com",
    databaseURL: "https://best-learning-tool-21387-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-21387",
    storageBucket: "best-learning-tool-21387.appspot.com",
    messagingSenderId: "282849610781",
    appId: "1:282849610781:web:ea557c63a6021652870af4",
    measurementId: "G-FLE3SHLRND"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];
// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().set(myFlashcards);
