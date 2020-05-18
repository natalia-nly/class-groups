class Clase {
    constructor(alumnos, nombre){
        this.nombre = nombre;
        this.alumnos = alumnos;
        this.girls = this.numGirls();
        this.boys = this.numBoys();
        this.grupos = [];

    }

    numGirls(){
        return this.alumnos.filter(alumno => alumno.genero === "Niña");
    }

    numBoys(){
        return this.alumnos.filter(alumno => alumno.genero === "Niño");
    }
}

