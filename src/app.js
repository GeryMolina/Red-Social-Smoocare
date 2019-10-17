// se traen las cosas que se necesitan desde el inicio
import { initFirebase } from './assets/js/initFirebase.js';
import { mainViews } from './assets/views/views.js';
const
    start = () => {
        //para iniciar base de datos firebase
        initFirebase();
        //la primera pantalla que abre 
        mainViews();

    }
    // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', start);