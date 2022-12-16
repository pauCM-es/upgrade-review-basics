//? MIX FOR E INCLUDES
// usa forof para recorrer el array de películas, genera un nuevo array con las
// categorías de las películas e imprime por consola el array de categorías. Ten
// en cuenta que las categorías no deberían repetirse. Para filtrar las categorías
// puedes ayudarte de la función .includes()

const movies = [
  { 
    title: "Madaraspar", 
    duration: 192, 
    categories: ["comedia", "aventura"] 
  },
  { 
    title: "Spiderpan", 
    duration: 122, 
    categories: ["aventura", "acción"] 
  },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];


const generalCategories = []

//* opcion 1: antes de meter la categoria al listado comprobar si ya esta dentro, si es asi pasar a la siguiente.
// ? Esta funciona

for (const pelicula of movies) {
  pelicula.categories.forEach( 
    element => generalCategories.includes(element) ? "" : generalCategories.push(element)
    )
}
console.log(generalCategories)
console.log("-----------------------------")



// * opcion2: primero hacer un listado con las categorias y luego limpiar las repetidas.
// ! sin terminar la opt2. 
let cajonMuertos = []

// 1. iteramos por cada pelicula (m) y guardamos el array de categorias en una variable (movieCategories)
for (const m of movies) {
  let movieCategories = m.categories

  // 2. iteramos por cada elemento del array de categorias que tiene esa pelicula "m" y hacemos un push
  // de cada elemento al array de generalCategories.
  movieCategories.forEach(c => {
    generalCategories.push(c)
  });
}

for (let i = 0; i < generalCategories.length; i++) {
  // const element = generalCategories[i];
  console.log("cajon: " + generalCategories)
  if (generalCategories.indexOf(generalCategories[i]) !== generalCategories.lastIndexOf(generalCategories[i])) {
    console.log ("matara esto " + generalCategories[i] + " - " + i)
    // generalCategories.splice(generalCategories[i], 1)
    cajonMuertos.push(generalCategories[i])
  }
}


console.log("cajonMuertos: " + cajonMuertos)
console.log(generalCategories)
console.log("-----------------------------")












