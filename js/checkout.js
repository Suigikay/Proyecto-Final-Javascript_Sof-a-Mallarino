const btnFinalizarCompra= document.querySelector("#finalizarCompra")

btnFinalizarCompra.addEventListener('click', ()=>{
        Swal.fire(
			 	'Tu pedido fue procesado con éxito',
				'¡Muchas gracias por tu compra!',
			 	'success'
			
		)
})

