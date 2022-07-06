// --------BOTONERA--------

let incrementar = document.getElementsByClassName("aumentar");
let disminuir = document.getElementsByClassName("disminuir");
let contador1 = document.querySelector("#contador1");
let contador2 = document.querySelector("#contador2");
let contador3 = document.querySelector("#contador3");
let contadores = [contador1, contador2, contador3];
let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;
let cantidades = [cantidad1, cantidad2, cantidad3];

for (let i = 0; i < incrementar.length; i++) {
	let boton = incrementar[i];
	boton.addEventListener("click", function () {
		cantidades[i]++;
		contadores[i].innerHTML = cantidades[i];
	});
}

for (let i = 0; i < disminuir.length; i++) {
	let boton = disminuir[i];
	boton.addEventListener("click", function () {
		if (cantidades[i] > 0) cantidades[i]--;
		contadores[i].innerHTML = cantidades[i];
	});
}

const productos = [
	{id: 1, producto: "Crema Antioxidante", precio: 1800},
	{id: 2, producto: "Serum BHA", precio: 1600},
	{id: 3, producto: "Espuma de Limpieza", precio: 700},
];

const guardarLocal = (clave, valor) => {
	localStorage.setItem(clave, valor);
};

for (const producto of productos) {
	guardarLocal(producto.id, JSON.stringify(producto));
}
guardarLocal("listaProductos", JSON.stringify(productos));

let lista = JSON.parse(localStorage.getItem("listaProductos"));
console.log(lista);
console.log(productos);

const btnEnviar= document.querySelector("#enviar")

btnEnviar.addEventListener('click', ()=>{
	Swal.fire({
        title: '¿Dirigir a finalizar compra?',
        icon: 'question',
        showConfirmButton: false,
        allowOutsideClick: true,
        footer:`<a class="btn btn-primary" href="pages/checkout.html">Aceptar</a>`
	})
})

