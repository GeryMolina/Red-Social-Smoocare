import { newRegt } from './newreg.js';
import { userGoogle, userFacebook, login } from '/assets/js/auth.js';

export const mainViews = () => {
    //creamos vista o pagina principal/
    const contPrincipal = document.getElementById("root");
    //creamos container principal
    
    const contInit = document.createElement("div");
    contInit.className = "contInit";
    contInit.setAttribute("id", "contInit");
    contPrincipal.appendChild(contInit);

    //creamos container header
    const contHeader = document.createElement("div");
    contHeader.className = "contHeader";
    contHeader.setAttribute("id", "contHeader");
    contInit.appendChild(contHeader);
    contHeader.innerHTML += `
                            <a title="Home" class="link" href="http://localhost:4500/"><img class="redSocialWelcome" src="assets/imagen/logo.png" alt="HomeRedSocial"></a>
                             `

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += ` <div class="init1"><h2 class="init" >Inicio de Sesión</h2> </div>
                            <div class="init2">
                            <input id="email2" type="correo" placeholder="Ingresa email" class="form"></br>
                            <input id="password2" type="password" placeholder="ingresa contraseña" class="form"></br>
                            </div>
                            <div class="initbutton">
                            <button id="boton2" class="btnSigin">Acceder</button>                     
                            </div>
                            <div class="initnew">
                            <p class= "question">¿Eres nuevo? </p><a id="newUser" class="linkNewAccount"href="#">Crea una Cuenta</a> </div>
                            


                            <div class="initLogin">
                            <h4>Accede con:</h4>
                            <button id="google" class="buttonGoogle">Google</button>
                            <button id ="facebook" class="buttonFB">Facebook</button>
                            </div>`

//<img src="assets/imagen/google.png" class="logoG"><img src="assets/imagen/facebook.png" class="logoF">



    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h6>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h6>`

    const newUser = document.getElementById("newUser");
    newUser.addEventListener('click', () => {
        contInit.innerHTML = " "
        newRegt()
    })


    const acceder=document.getElementById("boton2");
    acceder.addEventListener("click",()=>{
        login();
    })


    const userGoog = document.getElementById("google");
    userGoog.addEventListener("click", () => {

        userGoogle();

    })
    const userFace = document.getElementById("facebook");
    userFace.addEventListener("click", () => {

        userFacebook();

    })

}