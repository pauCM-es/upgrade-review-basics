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


console.log ("-------------------------")

sonidos.forEach( element => {
    medias.push({sonido: element, mediaVol: 0})
})

console.log(medias)


console.log ("-------------------------")


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

console.log ("-------------------------")


for (const i in medias) {
    let count = 0 //cada vez que salga el mis
    for (const j in general){
        if (medias[i].sonido === general[j].sonido){
            count++
            medias[i].mediaVol += general[j].vol
        }
    }
    
    console.log(count)
    console.log(medias[i].mediaVol)
    medias[i].mediaVol = medias[i].mediaVol / count
}

console.log(medias)


