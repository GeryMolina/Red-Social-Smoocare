// se traen las cosas que se necesitan desde el inicio
import { initFirebase } from './assets/js/initFirebase.js';
import { initRouter } from './route.js';
import { observador} from './assets/js/validation.js';
const start = () => {
        //para iniciar base de datos firebase
        initFirebase();
        //la primera pantalla que abre 
        initRouter();
        observador();

    }
    // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', start);