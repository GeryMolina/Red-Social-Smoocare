//Autentificacion de usuario
function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            aparece(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log(" existe usuario activo")

            // ...
        } else {
            // User is signed out.
            // ...
            console.log("no existe usuario activo")
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
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
        .then(function() {
            // Email sent.
            console.log("enviando correo")
        })
        .catch(function(error) {
            // An error happened.
            console.log(error)
        });
}