const nombre = document.getElementById("");
const edad = document.getElementById("");
// familia
const padre = document.getElementById("");
const madre = document.getElementById("");
const linaje = document.getElementById("");
const casa = document.getElementById("");
const animalPatronus = document.getElementById("");
const cualidades = document.getElementById("");



// Paso 1: Crear objeto estudianteHogwarts
let estudianteHogwarts = {
    nombre: "Jackson Ravenshadow Alderwing",
    edad: 11,
    familia: {
        padre: "Alderus Alderwing",
        madre: "Aiza Ravenshadow",
    },
    linaje: "Sangre pura",
    casa: "",
    animalPatronus: "",
    cualidades: ["Ambición", "Determinación", "Astucia"],

    enfrentarDementor: function () {
        let mensaje = "";
        if (estudianteHogwarts.animalPatronus !== "") {
            mensaje = "El estudiante utiliza su Patronus (" + estudianteHogwarts.animalPatronus + ") para alejar al Dementor.";
        } else {
            mensaje = "El estudiante es absorbido por el Dementor y es llevado a la enfermería.";
        }
        console.log(mensaje);
    },
};

// Paso 2
let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor María Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

// Paso 3
let sombreroSeleccionador = {
        asignarCasa: function () {
        estudianteHogwarts.casa = "No asignada";

        if (estudianteHogwarts.cualidades.includes("Valor") || estudianteHogwarts.cualidades.includes("Fuerza") || estudianteHogwarts.cualidades.includes("Audacia")) {
            if (estudianteHogwarts.linaje === "Mestizo" || estudianteHogwarts.linaje === "Muggle" || estudianteHogwarts.linaje === "Sangre pura") {
                estudianteHogwarts.casa = "Gryffindor";
            }
        } else if (estudianteHogwarts.cualidades.includes("Justicia") || estudianteHogwarts.cualidades.includes("Lealtad") || estudianteHogwarts.cualidades.includes("Paciencia")) {
            if (estudianteHogwarts.linaje === "Mestizo" || estudianteHogwarts.linaje === "Muggle") {
                estudianteHogwarts.casa = "Hufflepuff";
            }
        } else if (estudianteHogwarts.cualidades.includes("Creatividad") || estudianteHogwarts.cualidades.includes("Erudición") || estudianteHogwarts.cualidades.includes("Inteligencia")) {
            if (estudianteHogwarts.linaje === "Mestizo" || estudianteHogwarts.linaje === "Muggle" || estudianteHogwarts.linaje === "Sangre pura") {
                estudianteHogwarts.casa = "Ravenclaw";
            }
        } else if (estudianteHogwarts.cualidades.includes("Ambición") || estudianteHogwarts.cualidades.includes("Determinación") || estudianteHogwarts.cualidades.includes("Astucia")) {
            if (estudianteHogwarts.linaje === "Sangre pura") {
                estudianteHogwarts.casa = "Slytherin";
            }
        }
        return estudianteHogwarts.casa;
    }
};

// Paso 4
let claseTransformaciones = {
    nombreProfesor: clases.transformaciones,
    realizarTransformacionRiddikulus: function (boggart) {
        let mensaje = "";
        if (boggart) {
            mensaje = "Realizando la transformación con el encantamiento Riddikulus...\nEl boggart se transforma en algo cómico o inofensivo.";
        } else {
            mensaje = "No hay boggart presente.";
        }
        console.log(mensaje);
    },
    enfrentarBoggart: function (boggart) {
        let mensaje = "";
        if (boggart) {
            mensaje = "Aparece un boggart con la forma original: " + boggart;
            claseTransformaciones.realizarTransformacionRiddikulus(boggart);
        } else {
            mensaje = "No hay boggart presente.";
        }
        console.log(mensaje);
    },
};

// Paso 5
let defensaContraLasArtesOscuras = {
    nombreProfesor: clases.defensaContraLasArtesOscuras,
    animalPatronus: "",
    generarAnimalPatronus: function () {
        const animalesPatronusPosibles = ["León", "Ciervo", "Águila", "Serpiente"];
        estudianteHogwarts.animalPatronus = animalesPatronusPosibles[Math.floor(Math.random() * animalesPatronusPosibles.length)];
    },
    enfrentarDementor: function () {
        let mensaje = "";
        if (estudianteHogwarts.animalPatronus !== "") {
            mensaje = "El estudiante utiliza su Patronus (" + estudianteHogwarts.animalPatronus + ") para alejar al Dementor.";
        } else {
            mensaje = "El estudiante es absorbido por el Dementor y es llevado a la enfermería.";
        }
        console.log(mensaje);
    },
};

// Función para enfrentar un boggart
function enfrentarBoggart() {
    let boggartEjemplo = "Serpiente";
    claseTransformaciones.enfrentarBoggart(boggartEjemplo);
}

// Paso 6
function mostrarInformacion(estudiante) {
    console.log("Información del Estudiante:");
    console.log("Nombre: " + estudiante.nombre);
    console.log("Edad: " + estudiante.edad);
    console.log("Familia: Padre - " + estudiante.familia.padre + ", Madre - " + estudiante.familia.madre);
    console.log("Linaje: " + estudiante.linaje);
    console.log("Casa: " + estudiante.casa);
    console.log("Animal Patronus: " + estudiante.animalPatronus);
    console.log("Cualidades: " + estudiante.cualidades.join(", "));
}

// Llamadas a las funciones
sombreroSeleccionador.asignarCasa()
defensaContraLasArtesOscuras.generarAnimalPatronus();
mostrarInformacion(estudianteHogwarts);
enfrentarBoggart();
defensaContraLasArtesOscuras.enfrentarDementor();
