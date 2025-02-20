let EstacionOrigen = parseInt( prompt("Dime en qué estacion estas"));
let EstacionDestino = parseInt( prompt("Dime a que estacion quieres ir"));

console.log(`Estas en la estacion ${estacionesDelMetro(EstacionOrigen)} en la linea `);
console.log(`Quieres ir a la estacion  ${estacionesDelMetro(EstacionDestino)}`);




function estacionesDelMetro(numeroDeEstacion){
    let arregloDeEstacionesL1 =["Observatorio" , "Tacubaya", "Juanacatlan", "Chapultepec", "Sevilla",
        "Insurgentes","Cuahtemoc", "Balderas", "Salto del agua", "Isabel la Catolica","Pino Suarez",
        "Merced","Candelaria","San Lazaro","Moctezuma", "Balbuena","Boulevard Puero aereo","Gomez Arias",
        "Zaragoza", "Pantitlan"];
        

    let arregloDeEstacionesL2 =["Cuatro caminos","Panteones", "Tacuba","Cuitlahuac","Popotla","Colegio Militar",
        "Normal","San Cosme","Revolucion","Hidalgo","Bellas Artes","Allende","Zocalo","Pino Suarez","San Antonio Abad",
        "Chabacano","Viaducto","Xola","Villa de Cortes","Nativitas","Portales","Ermita","General Anaya","Taqueña"];
        
    let arregloEstacionesL3 =["Indios Verdes","Depostivo 18 De Marzo","Potrero","La Raza","Tlatelolco","Guerrero",
        "Hidalgo","Juarez","Balderas","Niños Heroes / Poder Judicial CDMX","Hospital General","Centro Medico",
        "Etiopia / Plaza De La Transparencia","Eugenia","Division del norte","Zapata","Coyoacan","Viveros / Derechos Humanos",
        "Miguel Angel De Quevedo","Copilco","Universidad"];
       
    }

