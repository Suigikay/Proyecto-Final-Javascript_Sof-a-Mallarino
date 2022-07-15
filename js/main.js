// --------Botonera de aumentar y disminuir cantidad--------

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

//Json Storage

const productos = [
	{id: 1, producto: "Crema Antioxidante", precio: 1800},
	{id: 2, producto: "Serum BHA", precio: 1600},
	{id: 3, producto: "Espuma de Limpieza", precio: 700}
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



//Boton "Proceder al pago" y "Finalizar compra" con Sweet Alert

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

//Async function con array de productos en Json

const listaPost = document.querySelector("#post");
const url = "./stock/stock.json";

const pedirProductos = async ()=>{
    const respuesta = await fetch(url)
    const productos = await respuesta.json()
    
    productos.forEach((productos) => {
      const section = document.createElement("section");
      const { img, nombre, desc } = productos;
      section.innerHTML = 
       `
  <section class="">
    <div class="d-flex align-content-center flex-wrap">
        <div class="m-2 col-md-2 col-lg-2 " >
            <div class="card" style="width: 17rem;">
                <div class="card-body">
                <img class="card-img-top" id="imgMuestra" src="${img}">
                <h5 class="card-title" id="nombreMuestra" >${nombre}</h5>
                <p class="card-text" id="descMuestra" >${desc}</p>
                <button class="btn btn-dark">Elegir</button>
                </div>
            </div>
        </div>
    </div>
 </section>
        `;

      listaPost.append(section);
    });

}
pedirProductos()




                    