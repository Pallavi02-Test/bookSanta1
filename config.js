import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCbAYmK97_SkKrz_srwx_87ISPQz2qCfIw",
  authDomain: "booksanta-57a03.firebaseapp.com",
  databaseURL: "https://booksanta-57a03-default-rtdb.firebaseio.com",
  projectId: "booksanta-57a03",
  storageBucket: "booksanta-57a03.appspot.com",
  messagingSenderId: "401510852894",
  appId: "1:401510852894:web:593b6d83c590cb921c010f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();