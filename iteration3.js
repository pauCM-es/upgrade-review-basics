//**Iteración #3: Mix Fors**

//? Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado
//? por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de
//?  los sonidos que el usuario tenga como favoritos.
//? Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se
//? repita como favorito en cada usuario.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


// Primera parte: saco un array de los sonidos (sin repetir)
let allSounds = []

for (user of users) {
  for (key in user.favoritesSounds) {
    // console.log(key);
    if (!allSounds.includes(key)){
      allSounds.push(key)
    }
  }
}

console.log(allSounds);


// Segunda parte: uso el primer array para acceder al sonido y compararlo por todos los favoritesSounds e ir 
// sumado el counter cuado da coincidencia.
let soundsCounted = {}

for (sound of allSounds) {
  let counter = 0

  for (user of users) {
    for (key in user.favoritesSounds) {
      sound === key && counter++
      }
    }

    //una vez tengo contadas las veces que me coincide el sonido, lo paso al objeto "soundsCounted"
    soundsCounted[sound] = counter
  }

  console.log(soundsCounted)




