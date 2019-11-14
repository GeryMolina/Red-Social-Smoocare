
import { observador } from './validation.js'

export const crearPost = () => {

    let db = firebase.firestore();
    observador();
   
  //usamos esta funcion para obtener uid de usuario corriente
  firebase.auth().onAuthStateChanged(user => {
    if (validatePost(postMesage)) {
      db.collection("posts")
        .add({
          uid: user.uid,
          authorName: user.displayName,
          photo: user.photoURL,
          date: date,
          message: postMesage
         
        })
        .then(function(docRef) {
         console.log("post escrito con ID: ", docRef.id)
         
        })
        .catch(function(error) {
          console.error("Error al agregar el documento: ", error);
        });
    } 
  });
    
}

//Valida si el textArea del post esta vacio
export const validatePost = postMesage => {
  if (postMesage === "" || postMesage.length < 2) {
    return false;
  } else {
    return true;
  }

import { observador } from './validation.js'

export const crearPost = () => {

    let db = firebase.firestore();
    observador();
   
  //usamos esta funcion para obtener uid de usuario corriente
  firebase.auth().onAuthStateChanged(user => {
    if (validatePost(postMesage)) {
      db.collection("posts")
        .add({
          uid: user.uid,
          authorName: user.displayName,
          photo: user.photoURL,
          date: date,
          message: postMesage,
         
        })
        .then(function(docRef) {
         console.log("post escrito con ID: ", docRef.id)
         
        })
        .catch(function(error) {
          console.error("Error al agregar el documento: ", error);
        });
    } 
  });
    
}

//Valida si el textArea del post esta vacio
export const validatePost = postMesage => {
  if (postMesage === "" || postMesage.length < 2) {
    return false;
  } else {
    return true;
  }

};