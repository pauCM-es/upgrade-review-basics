//? MIX FORS
// usa forof y forin para hacer la media del volumen de todos 
// los sonidos favoritos que tienen los usuarios.


const users = [
  { name: 'Manolo el del bombo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
  },
  { name: 'Mortadelo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 30},
        shower: {format: 'ogg', volume: 55},
        train: {format: 'mp3', volume: 60},
    }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]


let sonidos = []
let general = []
let medias = []

console.log ("------array lista de sonidos (sin repetir) y de todos con sus volumenes--------")

// 1. [sonidos sin repetir]
for (const usuario of users) {

    for (const sonido in usuario.favoritesSounds) {
        let vol = usuario.favoritesSounds[sonido].volume

        // array de obj [{sonido, volumen}]
        let item = {sonido, vol}
        general.push(item)

        if (!sonidos.includes(sonido)) {
            sonidos.push(sonido)
        }
    }
}

console.log(sonidos)
console.log(general)


console.log ("------array de obj de sonidos (sin repetir) al que ir sumando volumens--------")

// me hago un array de objetos con los sonidos y un volumen 0. a los que luego sumare los volumenes que de cada sonido.
sonidos.forEach( element => {
    medias.push({sonido: element, mediaVol: 0})
})

console.log(medias)


console.log ("---------no funciona----------------")

// !Ayudita de Juan. esto da un resultado de suma que no es (no se donde esta el error)
let allSounds = {}

for(i in sonidos){
    for(a in general){
        if (!allSounds[general[a].sonido]){
            allSounds[general[a].sonido] = general[a].vol
        }else{
            allSounds[general[a].sonido] += general[a].vol
        }
    }
}

console.log(allSounds)

console.log ("---------sumamos y contamos sonidos => MEDIA----------------")

// aacedo a cada sonido del array de medias 
for (const keyMedias in medias) {
    let count = 0 //cada vez que salga el sonido aumenta el contaddor. Luego se usa para la media.

    // accedo a cada objeto del array "general".
    for (const keyGeneral in general){

        // comparo el sonido anterior con los del general.sonido al que accedo en este for.
        // el keyMedias se mantiene el mismo mientra da toda la vuelta por el general (el keyGeneral si cambia).
        if (medias[keyMedias].sonido === general[keyGeneral].sonido){
            count++

            // si los sonidos coinciden sumamos el volumen a la mediaVol que iniciabamos a 0.
            medias[keyMedias].mediaVol += general[keyGeneral].vol
        }
    }
    // el keyMedias pasa al siguiente indice y vuelve a realizar el for in anterior por el array general
    
    // hacemos la media dentro del for in medias. 
    console.log(medias[keyMedias].mediaVol + " / " + count)
    medias[keyMedias].mediaVol = medias[keyMedias].mediaVol / count
}

console.log(medias)


