//**Iteración #6: Función swap**

//? Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
//? La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
//? Retorna el array resultante.


let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap (array, i, j) {
  let element1 = array[i]
  let element2 = array[j]

  array[i] = element2
  array[j] = element1

  return array

}
console.log(swap(players, 0, 2))
console.log(swap(players, 0, 1))