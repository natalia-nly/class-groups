const colegio = [];

const claseQuinto = new Clase(arrayQuinto, "Quinto");
const claseSexto = new Clase(arraySexto, "Sexto");

colegio.push(claseQuinto);
colegio.push(claseSexto);


const grupo1 = new Grupo("01/01/2020", "Grupo para el mes de enero");
const grupo2 = new Grupo("01/02/2020", "Grupo para el mes de febrero");
const grupo3 = new Grupo("01/03/2020", "Grupo para el mes de marzo");

claseQuinto.grupos.push(grupo1, grupo2, grupo3);



let mainDiv = document.querySelector("#main-content");
let mainAlumnos = document.getElementById("alumnos-main");

function homePage(){
    mainDiv.innerHTML = `
    <header>
        <h1><a href="index.html">Class Groups</a></h1>
    </header>

    <main>
        <a onclick="quintoDashboard()">
            <div class="class class-pointer">
                <h2>${claseQuinto.nombre}</h2>
                <div class="num-alumnos">
                        <p>${claseQuinto.alumnos.length} alumnos</p>
                        <button><img src="assets/arrow.png"></button>
                </div>
            </div>
        </a>

        <a onclick="sextoPage()">
            <div class="class class-pointer">
                <h2>${claseSexto.nombre}</h2>
                <div class="num-alumnos">
                        <p>${claseSexto.alumnos.length} alumnos</p>
                        <button><img src="assets/arrow.png"></button>
                </div>
            </div>
        </a>
    </main>

    `;

}

function quintoPage(){
    
    let html = 
    `
    <header>
        <h1><a href="index.html">Class Groups</a></h1>
        <div class="subheader">
            <h2>${claseQuinto.nombre}</h2>
        </div>
    </header>
    
    <div class="dashboard">
       <div class="columna-resumen">
           <h2>${claseQuinto.nombre}</h2>
           <h4>${claseQuinto.alumnos.length} alumnos</h4>
           <a onclick="quintoPage()" class="button-arrow">
              Ver alumnos <img src="assets/arrow-blue.png">
           </a>
           <br>
           <a onclick="quintoDashboard()" class="button-arrow">
              Ver grupos <img src="assets/arrow-blue.png">
           </a>
       </div>
       <div class="columna-grupos">
            <h2>Alumnos</h2>
    `;

    claseQuinto.alumnos.forEach(alumno => {
        let htmlBlock = 
        `
        <div class="class">
            <div class="nombre-alumno">
                <div class="iniciales">
                    <p>${alumno.nombre.charAt(0)}${alumno.apellido.charAt(0)}</p>
                </div>
                <h2>${alumno.nombre} ${alumno.apellido}</h2>
            </div>
            
            <div class="datos-alumno">
                <p>Nivel: <span>${alumno.nivel}</span></p>
                <p>Comportamiento: <span>${alumno.comportamiento}</span></p> 
                <p>Habilidades sociales: <span>${alumno.habilidadesSociales.uno ? `${alumno.habilidadesSociales.uno}` : ``}${alumno.habilidadesSociales.dos ? `, ${alumno.habilidadesSociales.dos}` : ``}${alumno.habilidadesSociales.tres ? `, ${alumno.habilidadesSociales.tres}` : ``}</span></p>
            </div>
        </div>

        `;



        html = html.concat(htmlBlock);
    });

    html = html.concat(
    `
        </div>
    </div>
    
    `);

    mainDiv.innerHTML = html;
}

function quintoDashboard(){
    let html = 
    `
    <header>
    <h1><a href="index.html">Class Groups</a></h1>
    <div class="subheader">
        <h2>${claseQuinto.nombre}</h2>
    </div>
</header>

<div class="dashboard">
   <div class="columna-resumen">
       <h2>${claseQuinto.nombre}</h2>
       <h4>${claseQuinto.alumnos.length} alumnos</h4>
           <a onclick="quintoPage()" class="button-arrow">
              Ver alumnos <img src="assets/arrow-blue.png">
           </a>
           <br>
           <a onclick="quintoDashboard()" class="button-arrow">
              Ver grupos <img src="assets/arrow-blue.png">
           </a>
       </div>
       <div class="columna-grupos">
            <h2>Grupos</h2>
    `;

    claseQuinto.grupos.forEach(grupo => {
        let htmlBlock = 
        `
        <a href="#">
                <div class="class class-pointer">
                    <div>
                        <h2>${grupo.fecha}</h2>
                        <p>${grupo.descripcion}</p>
                    </div>
                    
                    <div class="num-alumnos">
                            <button><img src="assets/arrow.png"></button>
                    </div>
                </div>
        </a>

        `;



        html = html.concat(htmlBlock);
    });

    html = html.concat(
    `
        </div>
    </div>
    
    `);

    mainDiv.innerHTML = html;
}

function sextoPage(){
    let html = 
    `
    <header>
        <h1><a href="index.html">Class Groups</a></h1>
        <div class="subheader">
            <h2>Sexto</h2>
        </div>
    </header>
    <main>
    `;

    claseSexto.alumnos.forEach(alumno => {
        let htmlBlock = 
        `
        <div class="class">
            <div class="nombre-alumno">
                <div class="iniciales">
                    <p>${alumno.nombre.charAt(0)}${alumno.apellido.charAt(0)}</p>
                </div>
                <h2>${alumno.nombre} ${alumno.apellido}</h2>
            </div>
          
            <div class="datos-alumno">
                <p>Nivel: <span>${alumno.nivel}</span></p>
                <p>Comportamiento: <span>${alumno.comportamiento}</span></p> 
                <p>Habilidades sociales: <span>${alumno.habilidadesSociales.uno ? `${alumno.habilidadesSociales.uno}` : ``}${alumno.habilidadesSociales.dos ? `, ${alumno.habilidadesSociales.dos}` : ``}${alumno.habilidadesSociales.tres ? `, ${alumno.habilidadesSociales.tres}` : ``}</span></p>
            </div>
        </div>

        `;



        html = html.concat(htmlBlock);
    });

    html = html.concat("</main>");

    mainDiv.innerHTML = html;
}





window.onload = () => {
    homePage();
};
