//* 1.Crear un array con los Dias de la semana
const diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];


// Confirmar que el array esta creado.
//console.table(diasSemana);

//* 2.Crear un array con los miembros de tu familia
// Desde el mas viejo hasta el mas joven

let miembrosFamilia = [
       "Héctor",
       "Maria",  
       "Leandra",
       "Héctor",
       "Isaac",
];

// * El array se creo correctamente
// console.table(miembrosFamilia);

// 3.Crear un objeto con los datos personales
 let datosPersonales = {

    nombreCompleto: "Héctor Rafael Peña Sosa",
    fechaNacimiento: "02 Febrero 2000",
    lugarNacimiento: "Santiago de los Cabelleros",
    edad: 20,
    comidasFavoritas: ["Chofan","Pechuga a la crema", "Arroz Blanco"],
    paisesParaVisitar: [
        "R.D",
        "U.S",
         "Haiti",
         "Mexico",
         "El Salvador",
    ],
    poseeLicenciaConducir: false,
    estaEnUniversidad: true,
 }
 // 4. Crear un objeto con mi artista favorito
 //Confirmaremos si esta correcto
// console.log(datosPersonales);

let artistaFavorito = {
    fullName: "Anne-Marie Rose Nicholson",
    songs: ["Friends","2002","Ciao Adios"],
    typeOfVoice: "Soprano",
    albums: ["Speak your Mind","Karate"],
    description: "Anne-Marie Rose Nicholson, conocida simplemente como Anne-Marie, es una cantante y compositora inglesa.",

};

//Correcto
//console.dir(artistaFavorito);
 
// 5. Imprimir Información
console.log(´Mi nombre completo es ${datosPersonales.nombreCompleto}´);
console.log(´Naci en ${datosPersonales.fechaNacimiento}´);
console.log(´El primer pais que quiero visitar es: ${datosPersonales.paisesParaVisitar[4]}´);
console.log(´Informacion de mi artista Favorito:

    nombre: $ {artistaFavorito.fullName}
    tipodeVoz: ${artistaFavorito.typeOfVoice}
    description: ${artistaFavorito.description}
    canciones: 1. ${artistaFavorito.songs[0]}
               2. ${artistaFavorito.songs[1]}´
               );
    
console.log(´El dia que naci fue un ${diasSemana[1]}´)