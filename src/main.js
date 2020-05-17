const colegio = [];

const claseQuinto = new Clase(arrayQuinto, "Quinto");
const claseSexto = new Clase(arraySexto, "Sexto");

colegio.push(claseQuinto);
colegio.push(claseSexto);

let mainDiv = document.querySelector("body");
let mainAlumnos = document.getElementById("alumnos-main");

function homePage(){
    mainDiv.innerHTML = `
    <header>
        <h1><a href="index.html">Class Groups</a></h1>
    </header>

    <main>
        <a onclick="quintoPage()">
            <div class="class">
                <h2>${claseQuinto.nombre}</h2>
                <div class="num-alumnos">
                        <p>${claseQuinto.alumnos.length} alumnos</p>
                        <button><img src="assets/arrow.png"></button>
                </div>
            </div>
        </a>

        <a onclick="sextoPage()">
            <div class="class">
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
            <h2>Quinto</h2>
        </div>
    </header>
    <main>
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

    html = html.concat("</main>");

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
