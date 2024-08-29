//escribir la funcion
// function saludar() {
//     console.log("Hola a todos")
// }

// //ejecutando la funcion
// saludar()

// //funcion flecha
// const saludarFlecha = () => {
//     console.log("Hola a saludarFlecha")
// }

// saludarFlecha()

///------------------
// function suma () {
//     return (2 + 2)
// }

// console.log(suma())

// const sumaFlecha = () => {
//     return (2 + 2)
// }
// console.log(sumaFlecha())

// const sumaFlechaDos = () => 2 + 2

// console.log(sumaFlechaDos())


///------------------parametros
// const suma = (a, b) => {
//     return (a + b)
// }
// console.log(suma(10,2))

///-----------valores por defecto

// const suma = (a = 0, b = 100, c = 20) => {
    
//     return (a + b + c)
// }
// console.log(suma(2 , 10, 50)) //a 62
// console.log(suma(2, 50)) //b 72
// console.log(suma(50)) //c 170
// console.log(suma()) //d NaN  // undefined + 100 + 20 = NaN


// //62 72 170 120
// //a 102 b 102 c 150 d 100
 
// console.log(undefined + 2) // NaN

// const saludar = (nombre = "usuario nuevo") => {
//     return (`Hola ${nombre}!!!`)
// }

// console.log(saludar("Juan"))
// console.log(saludar("Carlos"))
// console.log(saludar())


///----------parametros en funcion flecha
//area de un cuadrado es lado*lado || lado(por)lado
// const areaCuadrado = (lado) =>{
//     return lado*lado
// }

// console.log(areaCuadrado(5))
// //-----------------
// const areaCuadradoOtra = (lado) => lado * lado

// console.log(areaCuadradoOtra(4))
// //----------------- si recibe un solo arametro se puede sacar el parentesis
// const areaCuadradoOtraOpcion = x => x * x

// console.log(areaCuadradoOtraOpcion(3))


// ------------------Parametros rest
//ciclo iteracion



// const letras = (alumno, profesor, ...letras) => {
//     let suma = ""
//     for (let i = 0; i < letras.length; i++) {
//         suma = suma + (letras[i] + ", ")
//     }
//     console.log(`El alumno ${alumno} tuvo las siguientes calificaciones: ${suma}, su profesor es: ${profesor}`)
// }
// letras("Emiliano","Carlos","a","b","c","d","f")


//-----------Desestructuracion de parametros.. 

// const saludar = (alumno) =>{
//     console.log(alumno)
//     console.log(`Hola ${alumno.apellido}`)
// }

// saludar({nombre: "Erick", apellido: "Godoy"})
// //------------------



// const saludarDesestructuracion = ({apellido}) =>{
//     console.log(`Hola ${apellido}`)
// }

// saludarDesestructuracion({nombre: "Erick", apellido: "Godoy"})