//declaracion de variables
let producto = [
    {
        nombre: "MOTO",
        precio: 85000
    },
    {
        nombre: "LAVADORA",
        precio: 60000
    },
    {
        nombre: "TELEVISION",
        precio: 40000
    },
    {
        nombre: "CELULAR",
        precio: 15000
    },
]
let ticket = {}
const espacio = "--------------------------------------------";
const folio = Math.random();

//Funcion para hacer la operacion a meses
function elegirProducto(precio, articulo) {
    let meses = parseInt(prompt("Elija el plazo a meses (1-12):"));
    while (isNaN(meses) || meses < 1 || meses > 12) {
        meses = parseInt(prompt("Por favor, elija un plazo válido a meses (1-12):"));
    }
    let resultado = (precio / meses).toFixed();
    alert(`Producto: ${articulo}
No.Meses: ${meses}
Pago x mes: ${resultado}MXN`)

    ticket.meses = meses;
    ticket.resultado = resultado;
}

//Funcion para agregar producto
function agregarProd() {
    alert("Vamos a agregar un nuevo producto");
    let nuevoProducto = {};
    nuevoProducto.nombre = prompt("Ingrese el nombre del producto").toUpperCase();
    nuevoProducto.precio = parseInt(prompt("Ingrese el precio del producto"));
    while (isNaN(nuevoProducto.precio)) {
        nuevoProducto.precio = parseInt(prompt("Ingrese el precio en formato numero o valido"));
    }
    producto.push(nuevoProducto);
}

//Funcion para eliminar producto
function eliminarProd() {
    alert("Vamos a eliminar un producto existente");

    let productoEliminar = prompt("Ingrese el nombre del producto a eliminar").toUpperCase();
    let indice = producto.findIndex(p => p.nombre === productoEliminar);

    if (indice !== -1) {
        producto.splice(indice, 1);
        alert("Producto eliminado correctamente.");
    } else {
        alert("Producto no encontrado.");
    }

}

//Funcion de todo el simulador
function simulador() {
    let nombre = prompt("Ingrese su nombre");
    let direccion = prompt("Ingrese su direccion");
    let edad = parseInt(prompt("Ingrese su edad:"));

    ticket.nombre = nombre;
    ticket.direccion = direccion;
    ticket.edad = edad;

    while (isNaN(edad) || edad < 18) {
        if (isNaN(edad)) {
            edad = parseInt(prompt("Ingrese una edad valida:"));
        } else {
            edad = parseInt(prompt("Tienes que ser mayor de edad para realizar esta accion:"));
        }
    }

    while ((nombre == null || nombre == "") || (direccion == null || direccion == "")) {
        alert("Revise su informacion");
        nombre = prompt("Ingrese un nombre valido");
        direccion = prompt("Ingrese una direccion valida");
    }

    do {
        respuesta = undefined;

        let mensajeInicial = "Productos:\n";
        producto.forEach((producto, index) => {
            mensajeInicial += `    - ${producto.nombre}\n`;
        })

        alert(mensajeInicial);
        stock = prompt("¿Quieres agregar/eliminar un producto?(add/del)");
        if (stock === "add") {
            agregarProd();
        } else if (stock === "del") {
            eliminarProd();
        }

        let mensajePrompt = "Elija un producto:\n";
        producto.forEach((producto, index) => {
            mensajePrompt += `    - (${index + 1}) ${producto.nombre}\n`;
        })
        mensajePrompt += "\nDigite su index (valor numerico):";

        let eleccion = parseInt(prompt(mensajePrompt));

        while (isNaN(eleccion) || eleccion < 1 || eleccion > producto.length) {
            alert("Digite un producto valido")
            eleccion = parseInt(prompt(mensajePrompt));
        }



        const seleccion = producto[eleccion - 1];
        ticket.nombreProd = seleccion.nombre;
        ticket.precio = seleccion.precio;

        if (seleccion) {
            alert(`Producto seleccionado: ${seleccion.nombre}
Precio: $${seleccion.precio}
                `);
            elegirProducto(seleccion.precio, seleccion.nombre)
        } else {
            alert("Producto no encontrado.");
        }

        if (respuesta === undefined) {
            respuesta = prompt("¿Quieres calcular otro producto? (s/n)").toLowerCase();
            while (respuesta !== "s" && respuesta !== "n") {
                respuesta = prompt(`Ingrese una respuesta valida 
¿Quieres calcular otro producto?   (s/n)`).toLowerCase();
            }
        }

    } while (respuesta === "s");

    if (respuesta === "n") {
        if (prompt("¿Quieres confirmar e imprimir tu ticket?(s/n)") === "s") {
            alert("Su ticket se imprimio en consola");
            console.log(ticket);
            console.log(espacio);
            console.log("Ticket no. " + folio)
            console.log(espacio);
            console.log("Con nombre a:      " + ticket.nombre);
            console.log("Edad de :          " + ticket.edad);
            console.log("Con direccion a:   " + ticket.direccion);
            console.log(espacio);
            console.log("Nom. Producto:     " + ticket.nombreProd);
            console.log("Costo total:       $" + ticket.precio);
            console.log("No. Meses:         " + ticket.meses);
            console.log("Costo por mes:     $" + ticket.resultado);
            console.log(espacio);
        } else {
            alert("No ticket expedido");
        }
    }
}

//Inisializacion del proyecto
simulador();
