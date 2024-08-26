const prodMoto = "MOTO";
const prodLavadora = "LAVADORA";
const prodTele = "TELEVISION";
const prodCelular = "CELULAR"
let producto;
let meses;
let precio;
let resultado;
const espacio = "--------------------------------------------";
let nombre;
let direccion;
let edad;
const folio = Math.random();

function elegirProducto(precio, articulo) {
    meses = parseInt(prompt("Elija el plazo a meses (1-12):"));
    while (isNaN(meses) || meses < 1 || meses > 12) {
        meses = parseInt(prompt("Por favor, elija un plazo válido a meses (1-12):"));
    }
    resultado = (precio / meses).toFixed();
    alert("Su artículo " + articulo + " quedó a " + meses + " mensualidades de $" + resultado + "MXN cada una.");
}

function simulador() {
    nombre = prompt("Ingrese su nombre");
    direccion = prompt("Ingrese su direccion");
    edad = parseInt(prompt("Ingrese su edad:"));

while (isNaN(edad) || edad < 18) {
    if (isNaN(edad)){
        edad = parseInt(prompt("Ingrese una edad valida:"));
    }else{
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
        producto = prompt(`Elija un producto:
    -MOTO
    -LAVADORA
    -TELEVISION
    -CELULAR`).toUpperCase();

        switch (producto) {
            case prodMoto:
                articulo = prodMoto;
                precio = 85000;
                elegirProducto(precio, articulo);
                break;

            case prodLavadora:
                articulo = prodLavadora;
                precio = 60000;
                elegirProducto(precio, articulo);
                break;

            case prodTele:
                articulo = prodTele;
                precio = 40000;
                elegirProducto(precio, articulo);
                break;

            case prodCelular:
                articulo = prodCelular;
                precio = 15000;
                elegirProducto(precio, articulo);
                break;

            default:
                alert("Producto no válido. Inténtelo de nuevo.");
                respuesta = "s";
        }

        if(respuesta === undefined){
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
            console.log(espacio);
            console.log("Ticket no. " + folio)
            console.log(espacio);
            console.log("Con nombre a:      " + nombre);
            console.log("Edad de :          " + edad);
            console.log("Con direccion a:   " + direccion);
            console.log(espacio);
            console.log("Nom. Producto:     " + articulo);
            console.log("Costo total:       $" + precio);
            console.log("No. Meses:         " + meses);
            console.log("Costo por mes:     $" + resultado);
            console.log(espacio);
        } else {
            alert("No ticket expedido");
        }
    }
}

simulador();
