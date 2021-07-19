  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5yYQsZQSKLCwJo6SDhrV8f3WV644pIwU",
    authDomain: "learningtools-dfc82.firebaseapp.com",
    projectId: "learningtools-dfc82",
    storageBucket: "learningtools-dfc82.appspot.com",
    messagingSenderId: "882460181788",
    appId: "1:882460181788:web:89d9f26af46075f46066d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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


