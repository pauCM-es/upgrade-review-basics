//*teración #4: Métodos findArrayIndex

//? Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y 
//? devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

let textArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
     
    if (element === text) {
      return i
      
    }
    
  }

}

console.log (findArrayIndex(textArray, "Salamandra"))

