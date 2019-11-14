import { crearPost } from '/assets/js/post.js';

export const wall = () => {
    //creamos vista o pagina principal
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
    contHeader.innerHTML += `<div class= "logo">
    <a title="Home" href="http://localhost:4500/"><img class="redSocialWelcome" src="assets/imagen/logo14.png" alt="HomeRedSocial"></a>
                             </div>`

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += `<h4>Chat</h4>
                            <div class= "sala">
                            <div id="muro"><p id="history"></p></div>
                            <textarea id="post" placeholder="Escribe tu post aquí"></textarea>
                            </div>
                            <button id="postear" class="btnpost">Enviar</button> `

    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    contFooter.innerHTML += ` <h3>Creado por Geraldine, Marielys y Natalia, Laboratoria 2019</h3>`

    
  const btnenviar=document.getElementById("postear");
    btnenviar.addEventListener('click',()=>{
    const text = document.getElementById("post").value;
    crearPost();
  })

}