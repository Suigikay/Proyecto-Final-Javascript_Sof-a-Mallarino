// const productos = [
//     {
//         "Id": 1,
//         "Nombre": "Limpiador",
//         "Precio": 359,
//         "Categoria": "Limpieza"

//     },
//     {
//         "Id": 2,
//         "Nombre": "Serum",
//         "Precio": 680,
//         "Categoria": "Activos"

//     },
//     {
//         "Id": 3,
//         "Nombre": "Hidratante",
//         "Precio": 520,
//         "Categoria": "Hidratantes"

//     },
//     {
//         "Id": 4,
//         "Nombre": "Tratamiento",
//         "Precio": 450,
//         "Categoria": "Activos"

//     },
//     {
//         "Id": 5,
//         "Nombre": "SPF",
//         "Precio": 890,
//         "Categoria": "Protectores"

//     }
// ]


// function ingresarUsuario() {
//     let ingresarUsuario = prompt("Hola! Bienvenida/o a nuestra tienda \nPorfavor ingrese su usuario.");
//     alert("Hola " + ingresarUsuario + "," + " por favor seleccione los productos que desea en la siguiente página:");
// }

// ingresarUsuario()

// function ingresoProductos() {
//     let ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4-Tratamiento $450 \n 5-Pantalla solar SPF +50 $890");
//     while (ingreso != "SALIR" && ingreso != "salir") {
//         switch (ingreso) {
//             case "1":
//                 alert("Seleccionaste Limpiador")
//                 break;
//             case "2":
//                 alert("Seleccionaste Serum");
//                 break;
//             case "3":
//                 alert("Seleccionaste Hidratante");
//                 break;
//             case "4":
//                 alert("Seleccionaste Tratamiento");
//                 break;
//             case "5":
//                 alert("Seleccionaste Pantalla solar SPF +50");
//                 break;
//             default:
//                 alert("Opcion no valida");
//                 break;
//         }
//         ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4- Tratamiento $450 \n 5-Pantalla solar SPF +50 $890 \n\n Para salir ingresa SALIR")
//     }
// }
// ingresoProductos()


// const muestrasElegidas = [];
// let cantidad = 2;

// do {
//     let entrada = prompt("Con tu compra ofrecemos muestras gratis de productos, selecciona hasta 2 de las siguientes opciones: \n 1-Foam Cleanser piel mixta/grasa \n 2-Foam Cleanser piel sensible/seca \n 3-Cleansing Balm \n 4-Exfoliante BHA+AHA ");
//     muestrasElegidas.push(entrada);
// } while (muestrasElegidas.length != cantidad)
// alert("Tus opciones seleccionadas son " + muestrasElegidas + ". Gracias por comprar con nosotras :)");


// const resultado = productos.find((el) => el.Nombre === "Serum")
// const resultado2 = productos.find((el) => el.Id === "6")
// const resultado3 = productos.find((el) => el.Precio > 1000)

// const resultado4 = productos.filter((el) => el.Precio <= 600)


// console.log(resultado)
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)

// const preciosActualizados = productos.map((el) => {
//     return {
//         Nombre: el.Nombre,
//         Precio: el.Precio * 1.5
//     }
// })

// console.log(preciosActualizados)

// --------BOTONERA--------

let contador = document.querySelector('#contador');
let btnMas = document.querySelector('#aumentar')
let btnMenos = document.querySelector('#disminuir')
    ;
let cont = 0
function suma(num) {
    cont = cont += num;
    contador.innerHTML = cont;
}

function resta(num) {
    cont = cont -= num;
    contador.innerHTML = cont;
}



btnMas.addEventListener('click', () => {
    suma(1);
})
btnMenos.addEventListener('click', () => {
    resta(1);
})