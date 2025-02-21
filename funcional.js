let lineaDeOrigen = parseInt( prompt("Dime en qué linea estas"));
let lineaDeDestino = parseInt( prompt("Dime a que linea quieres ir"));

console.log(`Estas en la linea ${lineaDeOrigen} , estas son sus estaciones: ${estacionesDelMetro(lineaDeOrigen)} `);
console.log(`Estas en la linea ${lineaDeDestino} , estas son sus estaciones: ${estacionesDelMetro(lineaDeDestino)} `);




function estacionesDelMetro(numeroDeLinea){
    if(numeroDeLinea==1){
        let arregloDeEstacionesL1 =["Observatorio" , "Tacubaya", "Juanacatlan", "Chapultepec", "Sevilla",
            "Insurgentes","Cuahtemoc", "Balderas", "Salto del agua", "Isabel la Catolica","Pino Suarez",
            "Merced","Candelaria","San Lazaro","Moctezuma", "Balbuena","Boulevard Puero aereo","Gomez Arias",
            "Zaragoza", "Pantitlan"];
            return arregloDeEstacionesL1;
    }
    
    if(numeroDeLinea==2){
        let arregloDeEstacionesL2 =["Cuatro caminos","Panteones", "Tacuba","Cuitlahuac","Popotla","Colegio Militar",
            "Normal","San Cosme","Revolucion","Hidalgo","Bellas Artes","Allende","Zocalo","Pino Suarez","San Antonio Abad",
            "Chabacano","Viaducto","Xola","Villa de Cortes","Nativitas","Portales","Ermita","General Anaya","Taqueña"];
            return arregloDeEstacionesL2;

    }
    if(numeroDeLinea==3){
        let arregloEstacionesL3 =["Indios Verdes","Depostivo 18 De Marzo","Potrero","La Raza","Tlatelolco","Guerrero",
            "Hidalgo","Juarez","Balderas","Niños Heroes / Poder Judicial CDMX","Hospital General","Centro Medico",
            "Etiopia / Plaza De La Transparencia","Eugenia","Division del norte","Zapata","Coyoacan","Viveros / Derechos Humanos",
            "Miguel Angel De Quevedo","Copilco","Universidad"];
            return arregloEstacionesL3;
    }

    if(numeroDeLinea==4){
        let arregloDeEstacionesL4 =["Martin Carrera","Talisman","Bondojito","Consulado","Canal Del Norte","Morelos","Candelaria / Palacio Legislativo",
            "Fray Servando","Jamaica","Santa Anita"];
            return arregloDeEstacionesL4;
    }
   
    if(numeroDeLinea == 5){
        let arregloDeEstacionesL5 =["Politecnico","Instituto Del Petroleo","Autobuses Del Norte","La Raza","Misterios",
            "Valle Gomez","Consulado","Eduardo Molina","Aragon","Oceania","Terminal Aerea","Hangares","Pantitlan"];
            return arregloDeEstacionesL5;
        }
    //Aaron, empieza desde aqui a abajo a acompletar los arreglos de las lineas faltantes
       
    }



const opciones = ["Linea 1", "Linea 2", "Linea 3","Linea 4","Linea 5","Linea 6","Linea 7","Linea 8",
    "Linea 9","Linea A","Linea B","Linea 12"]; //se crea un arreglo de 3 elementos
const dropdownContent = document.querySelector(".dropdown-content"); //creamos una variable y le asignamos el valor de 

opciones.forEach((opcion) => {
    // Crear un div para cada opción
    const divOpcion = document.createElement("div");
    divOpcion.textContent = opcion;
    divOpcion.addEventListener("click", () => {
        alert(`Seleccionaste: ${opcion}`);
    });

    // Agregar la opción al menú
    dropdownContent.appendChild(divOpcion);
});