import { wall } from "../views/wall.js";
import{mainViews} from "../views/views.js";
//Autentificacion de usuario
export const observador = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var uid = user.uid;
          /*   // User is signed in.
            aparece(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
          

            // ... */
            console.log('ingreso');
            
           
        } else {
            // User is signed out.
            // ...
            console.log("no existe usuario activo")
            mainViews();
        }
    });
}

function aparece(user) {
    const usuario = user;
    const contenido = document.getElementById("contenido");
    if (usuario.emailVerified) {
        contenido.innerHTML = `
        <p>Bienvenido!</p>
        <button onclick="cerrar()">Cerrar Seccion2</button>`;
    }

}
//cerrar sesion
function cerrar() {
    firebase.auth().signOut()
        .then(function() {
            console.log("saliendo")
        })
        .catch(function(error) {
            console.log(error);

        });
}
// Verificación por 
export const verificar = ()=> {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
        .then(function() {
            // Email sent.
            console.log("enviando correo")
            contInit.innerHTML = " ";
            wall();
        })
        .catch(function(error) {
            // An error happened.
            console.log(error)
        });
}