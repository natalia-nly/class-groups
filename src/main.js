const colegio = [];

const claseQuinto = new Clase(arrayQuinto, "Quinto");
const claseSexto = new Clase(arraySexto, "Sexto");

colegio.push(claseQuinto);
colegio.push(claseSexto);

let mainDiv = document.querySelector("main");

let html = "";

colegio.forEach(clase => {
    let htmlBlock = 
    `
    <a href="#">
        <div class="class">
            <h2>${clase.nombre}</h2>
            <div class="num-alumnos">
                    <p>${clase.alumnos.length} alumnos</p>
                    <button><img src="assets/arrow.png"></button>
            </div>
        </div>
    </a>

    `;

    html = html.concat(htmlBlock);

});

mainDiv.innerHTML = html;