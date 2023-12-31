// alertas

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
// familia
const linaje = document.getElementById("linaje");
const cualidades = document.getElementById("cualidades");

const btnEnvio = document.getElementById("btnSend");
if (btnEnvio) {
    btnEnvio.addEventListener('click', registroEstudiante);
}

const btnIrACena = document.getElementById("btnCena");
if (btnIrACena) {
    btnIrACena.addEventListener('click', irACena);
}

const btnIrAClases = document.getElementById("btnClases");
if (btnIrAClases){
    btnIrAClases.addEventListener('click', irAClases)
}

const btnGenerar = document.getElementById("btnGenerarAnimal")
if (btnGenerar) {
    btnGenerar.addEventListener('click', generarAnimalP)
}

// variables de info
const nombreInfo = document.getElementById("nombreInfo");
const edadInfo = document.getElementById("edadInfo");
const linajeInfo = document.getElementById("linajeInfo");
const casaInfo = document.getElementById("casaInfo");
const animalPatronusInfo = document.getElementById("animalPatronusInfo");
const cualidadesInfo = document.getElementById("cualidadesInfo");
const casaText = document.getElementById("casaText")


// Paso 1: Crear objeto estudianteHogwarts
let estudianteHogwarts = {
    nombre: "",
    edad: "",
    linaje: "",
    casa: "",
    animalPatronus: "",
    cualidades: "",

    enfrentarDementor: function () {
        let mensaje = "";
        if (estudianteHogwarts.animalPatronus !== "") {
            mensaje = "El estudiante utiliza su Patronus (" + estudianteHogwarts.animalPatronus + ") para alejar al Dementor.";
        } else {
            mensaje = "El estudiante es absorbido por el Dementor y es llevado a la enfermería.";
        }
    },
};


function registroEstudiante() {

    // Obtener los valores de los campos de entrada
    let nombreEstudiante = nombre.value;
    let edadEstudiante = edad.value;
    let linajeEstudiante = linaje.value;
    let cualidadesEstudiante = cualidades.value;

    // Validar que no existan campos vacios
    if (
        nombreEstudiante === "" ||
        edadEstudiante === "" ||
        linajeEstudiante === "" ||
        cualidadesEstudiante === ""
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay un campo o mas vacio'
        });
        return; // Se detiene el proceso si hay campos nulos
    }

    estudianteHogwarts.nombre = nombreEstudiante;
    estudianteHogwarts.edad = edadEstudiante;
    estudianteHogwarts.linaje = linajeEstudiante;
    estudianteHogwarts.cualidades = cualidadesEstudiante;

    defensaContraLasArtesOscuras.generarAnimalPatronus();
    sombreroSeleccionador.asignarCasa();
    localStorage.setItem('estudiantes', JSON.stringify(estudianteHogwarts));

    nombre.value = "";
    edad.value = "";
    cualidades.value = "";
    linaje.value = "";

    window.location.href = "informacion.html";
}

// Se asignan los datos tomados del localStorage
document.addEventListener('DOMContentLoaded', function () {
    let estudiantesLocal = JSON.parse(localStorage.getItem('estudiantes'));

    nombreInfo.textContent = estudiantesLocal.nombre;
    edadInfo.textContent = estudiantesLocal.edad;
    linajeInfo.textContent = estudiantesLocal.linaje;
    casaInfo.textContent = estudiantesLocal.casa;
    animalPatronusInfo.textContent = "....."
    cualidadesInfo.textContent = estudiantesLocal.cualidades;
    casaText.textContent = estudiantesLocal.casa;
});


function irACena() {
    window.location.href = "cenaBienvenida.html";
}

function irAClases() {
    window.location.href = "clases.html";
}

function generarAnimalP() {
    let estudiantesLocal = JSON.parse(localStorage.getItem('estudiantes'));

    animalPatronusInfo.textContent = estudiantesLocal.animalPatronus
}

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
    hora: "9 AM",
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
            mensaje = "Aparece un boggart en la clase de transformaciones: " + boggart;
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
    console.log("Cualidades: " + estudiante.cualidades);
}


// Paso 7
let clasePociones = {
    profesor: clases.pociones,
    horario: "10 AM",
    ingredientes: {
        crisopos: 2,
        talloDescurainiaSophia: 1
    },
    tiempoPreparacion: 5,
    pocionPreparada: false,
    prepararPocion: function () {
        if (clasePociones.ingredientes.crisopos === 2 && clasePociones.ingredientes.talloDescurainiaSophia === 1 && clasePociones.tiempoPreparacion === 5) {
            console.log("!Pocion Felix Felicis Preparada con exito¡");
            clasePociones.pocionPreparada = true;
        } else {
            console.log("No se pudo preparar la Pocion Felix Felicis");
            clasePociones.pocionPreparada = false;
        }
    },

    aplicarConsecuencias: function () {
        if (clasePociones.pocionPreparada) {
            console.log("La pocion ha tenido efecto");
            console.log("cambia al profesor de pociones por el de animales magicos. ");
            clasePociones.profesor = clases.animalesMagicos;
            clases.pociones = clasePociones.profesor;
            console.log(`profesor: ${clasePociones.profesor}`)
        } else {
            console.log("No se pueden aplicar consecuencias. ")
        }
    },

}


// Llamadas a las funciones
// defensaContraLasArtesOscuras.generarAnimalPatronus();
// mostrarInformacion(estudianteHogwarts);
// enfrentarBoggart();
// defensaContraLasArtesOscuras.enfrentarDementor();

// console.log("\n");

// clasePociones.prepararPocion();
// clasePociones.aplicarConsecuencias();