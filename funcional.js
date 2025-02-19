let EstacionOrigen = parseInt( prompt("Dime en qué estacion estas"));
let EstacionDestino = parseInt( prompt("Dime a que estacion quieres ir"));

console.log(`Estas en la estacion ${estacionesDelMetro(EstacionOrigen)} en la linea `);
console.log(`Quieres ir a la estacion  ${estacionesDelMetro(EstacionDestino)}`);




function estacionesDelMetro(numeroDeEstacion){
    let arregloDeEstacionesL1 =["Observatorio" , "Tacubaya", "Juanacatlan", "Chapultepec", "Sevilla",
        "Insurgentes","Cuahtemoc", "Balderas", "Salto del agua", "Isabel la Catolica","Pino Suarez",
        "Merced","Candelaria","San Lazaro","Moctezuma", "Balbuena","Boulevard Puero aereo","Gomez Arias",
        "Zaragoza", "Pantitlan"];

    let arregloDeEstacionesL2 =[""];
        
    
        return arregloDeEstacionesL1[numeroDeEstacion-1];
    }

