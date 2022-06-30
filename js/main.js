
// --------BOTONERA--------
let contador1 = document.querySelector('#contador1');
let contador2 = document.querySelector('#contador2')
let contador3 = document.querySelector('#contador3')
let btnMas1 = document.querySelector('#aumentar1')
let btnMas2 = document.querySelector('#aumentar2')
let btnMas3 = document.querySelector('#aumentar3')
let btnMenos1 = document.querySelector('#disminuir1')
let btnMenos2 = document.querySelector('#disminuir2')
let btnMenos3 = document.querySelector('#disminuir3')
    ;


let cont = 0
function suma(num) {
    cont += num
    contador.innerHTML = cont;
}

function resta(num) {
    cont -= num
    contador.innerHTML = cont;
}


btnMas.addEventListener('click', () => {
    suma(1);
})
btnMenos.addEventListener('click', () => {
    resta(1);
})



const productos = [
    { id: 1, producto: "Crema Antioxidante", precio: 1800 },
    { id: 2, producto: "Serum BHA", precio: 1600 },
    { id: 3, producto: "Espuma de Limpieza", precio: 700 },

];

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

let lista = JSON.parse(localStorage.getItem("listaProductos"));
console.log(lista);
console.log(productos);
