const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
// familia
const padre = document.getElementById("padre");
const madre = document.getElementById("madre");
const linaje = document.getElementById("linaje");
const cualidades = document.getElementById("cualidades");


const btnEnvio = document.getElementById("btnSend");
btnEnvio.addEventListener('click', registroEstudiante);


// Paso 1: Crear objeto estudianteHogwarts
let estudianteHogwarts = {
    nombre: "",
    edad: 0,
    familia: {
        padre: "",
        madre: "",
    },
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
        console.log(mensaje);
    },
};

// sombreroSeleccionador.asignarCasa()


function registroEstudiante() {

    // Obtener los valores de los campos de entrada
    let nombreEstudiante = nombre.value;
    let edadEstudiante = edad.value;
    let nombrePadre = padre.value;
    let nombreMadre = madre.value;
    let linajeEsudiante = linaje.value;
    let cualidadesEstudiante = cualidades.value;

    // Validar que no existan campos vacios
    if (
        nombreEstudiante === "" ||
        edadEstudiante === "" ||
        nombrePadre === "" ||
        nombreMadre === "" ||
        linajeEsudiante === "" ||
        cualidadesEstudiante === ""
    ) {
        alert("Por favor, completa todos los campos.")
        return; // Se detiene el proceso si hay campos nulos
    }

      // Actualizar las propiedades del objeto estudianteHogwarts
      estudianteHogwarts.nombre = nombreEstudiante;
      estudianteHogwarts.edad = edadEstudiante;
      estudianteHogwarts.familia.padre = nombrePadre;
      estudianteHogwarts.familia.madre = nombreMadre;
      estudianteHogwarts.linaje = linajeEsudiante;
      estudianteHogwarts.cualidades = cualidadesEstudiante;  

      localStorage.setItem('estudianteHogwarts', JSON.stringify(estudianteHogwarts));
      
      sombreroSeleccionador.asignarCasa();

      nombre.value = ""
      edad.value = ""
      padre.value = ""
      madre.value = ""
      cualidades.value = ""
      linaje.value = ""

      console.log(estudianteHogwarts);
    
    window.location.href = "informacion.html"
}

// let estudiants = JSON.parse(localStorage.getItem('estudianteHogwarts'));
// console.log(estudiants);


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
        let datosLocalStorage = JSON.parse(localStorage.getItem('estudianteHogwarts'))
        datosLocalStorage.casa = "No asignada";

        
        if (datosLocalStorage.cualidades == "Valor, Fuerza, Audacia") {
            if (datosLocalStorage.linaje === "Mestizo" || datosLocalStorage.linaje === "Muggle" || datosLocalStorage.linaje === "Sangre pura") {
                datosLocalStorage.casa = "Gryffindor";
            }
        } else if (datosLocalStorage.cualidades == "Justicia, Lealtad, Paciencia") {
            if (datosLocalStorage.linaje === "Mestizo" || datosLocalStorage.linaje === "Muggle") {
                datosLocalStorage.casa = "Hufflepuff";
            }
        } else if (datosLocalStorage.cualidades === "Creatividad, Erudicion, Inteligencia") {
            if (datosLocalStorage.linaje === "Mestizo" || datosLocalStorage.linaje === "Muggle" || datosLocalStorage.linaje === "Sangre pura") {
                datosLocalStorage.casa = "Ravenclaw";
            }
        } else if (datosLocalStorage.cualidades === "Ambicion, Determinacion, Astucia") {
            if (datosLocalStorage.linaje === "Sangre pura") {
                datosLocalStorage.casa = "Slytherin";
            }
        }

        localStorage.setItem('estudianteHogwarts', JSON.stringify(datosLocalStorage));     

        // return estudianteHogwarts.casa;
    }
    // Guardar los cambios de vuelta en localStorage
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
    prepararPocion: function (){
        if(clasePociones.ingredientes.crisopos === 2 && clasePociones.ingredientes.talloDescurainiaSophia === 1 && clasePociones.tiempoPreparacion === 5){
            console.log("!Pocion Felix Felicis Preparada con exito¡");  
            clasePociones.pocionPreparada = true;          
        }else{
            console.log("No se pudo preparar la Pocion Felix Felicis");
            clasePociones.pocionPreparada = false;
        }
    },

    aplicarConsecuencias: function(){
        if(clasePociones.pocionPreparada){
            console.log("La pocion ha tenido efecto");
            console.log("cambia al profesor de pociones por el de animales magicos. ");
            clasePociones.profesor = clases.animalesMagicos;
            clases.pociones = clasePociones.profesor;
            console.log(`profesor: ${clasePociones.profesor}`)
        }else{
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