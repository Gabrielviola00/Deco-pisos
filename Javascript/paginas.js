let seccionPisos = document.querySelector(".seccion-pisos")
let seccionServicios = document.querySelector(".seccion-servicios")
let seccionProductos = document.querySelector(".seccion-productos")
let seccionNosotros = document.querySelector(".seccion-trabajos")

seccionPisos.addEventListener ('click', function(){
    window.location.href = "../PAGINAS/pisos.html"
})

seccionProductos.addEventListener ('click', function(){
    window.location.href = "../PAGINAS/productos.html"
})

seccionServicios.addEventListener ('click', function(){
    window.location.href = "../PAGINAS/servicios.html"
})

seccionNosotros.addEventListener ('click', function(){
    window.location.href = "../index.html"
})
