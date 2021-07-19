 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDO28bKdG5tpw_BrM0own5jzcZnie1TnWA",
    authDomain: "best-learning-tool-21387.firebaseapp.com",
    databaseURL: "https://best-learning-tool-21387-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-21387",
    storageBucket: "best-learning-tool-21387.appspot.com",
    messagingSenderId: "282849610781",
    appId: "1:282849610781:web:c657a489499e8161870af4",
    measurementId: "G-NJW2SJVRHB"
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
let dblocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dblocation.set(myFlashcards);

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
firebase.database().ref('deck/flashcards'); 
 
// Remove myFlashcards from the database
firebase.database.remove()

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
let fc = firebase.database().ref('deck/flashy');

// A variable to store the JSON results in a human readable format
let jsonString;
// Tell Firebase to retrieve your data

fc.on("value", function(retrieve) {
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);
});

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )


