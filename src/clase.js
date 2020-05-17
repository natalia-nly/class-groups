class Clase {
    constructor(alumnos, nombre){
        this.nombre = nombre;
        this.alumnos = alumnos;
        this.girls = this.numGirls();
        this.boys = this.numBoys();
        this.grupos = [];

    }

    numGirls(){
        let arrayGirl = [];

        this.alumnos.forEach(alumno => {
            if (alumno.genero === "Niña"){
                arrayGirl.push(alumno);
            }
        });

        return arrayGirl;
    }

    numBoys(){
        let arrayBoy = [];

        this.alumnos.forEach(alumno => {
            if (alumno.genero === "Niño"){
                arrayBoy.push(alumno);
            }
        });

        return arrayBoy;
    }
}