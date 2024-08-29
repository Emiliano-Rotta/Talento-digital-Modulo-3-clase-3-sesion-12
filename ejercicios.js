//Descripción: Crea una función que calcule el promedio de una lista de números. La función debe aceptar un número variable de argumentos utilizando parámetros rest.


// const promedio = (...numeros) => {
//     let suma = 0
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i]
//     }
//     let promedioRealizado = suma/numeros.length
//     console.log(`el promedio de numeros ingresados es: ${promedioRealizado}`)
// }

// promedio(1,2,3,4)//el promedio de numeros ingresados es: 2.5


// Descripción: Crea una función que reciba un objeto con información del perfil de un usuario. La función debe utilizar desestructuración para extraer el nombre y la edad, y los parámetros rest para incluir una lista opcional de habilidades. Usa valores por defecto para la edad y habilidades.


const infoPerfil = ({nombre, edad = 18}, ...habilidades) => {
    console.log(`Nombre: ${nombre}`)
    console.log(`Edad: ${edad}`)

    let arrayHabilidades = ""
    for (let i = 0; i < habilidades.length; i++) {
        arrayHabilidades += (habilidades[i] + " ") //se puede remplazar el + " " por un join
    }
    if(arrayHabilidades === ""){
        console.log("No tiene habilidades")
    } else {
        console.log(`Habilidades: ${arrayHabilidades}`)
    }
}

infoPerfil({nombre:"Juan", edad:50})
infoPerfil({nombre:"Juan"}, "Node", "Jquery")