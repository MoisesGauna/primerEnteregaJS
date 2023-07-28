function saludar(nombre, apellido) {
    console.log("Hola" + nombre)
    alert("Hola" + " " + nombre)
    alert("Contamos con las siguientes placas de video en stock");
    alert(" 🔘GTX1660 \n 🔘RTX3060 \n 🔘RTX3080");
    let placaVideo = prompt("Ingrese la placa de video que busca").toUpperCase();


    let precioUno = 100000;
    let precioDos = 150000;
    let precioTres = 250000;

    while (placaVideo != "GTX1660" && placaVideo != "RTX3060" && placaVideo != "RTX3080") {
        alert("No se encuentra en stock");
        placaVideo = prompt("Ingrese la placa de video que busca").toUpperCase();
    };

    let cantidad = parseInt(prompt("ingrese la cantidad que desa comprar"));
    let formaPago = prompt("Ingrese forma de pago = $ o u$d");
    if (formaPago == "$") {
        function calculadora(cantidad, placaVideo) {
            switch (placaVideo) {
                case "GTX1660":
                    return cantidad * precioUno;
                    break;

                case "RTX3060":
                    return cantidad * precioDos;
                    break;

                case "RTX3080":
                    return cantidad * precioTres;
                    break;
            }
        }
    } else if (formaPago == "u$d") {
        function calculadora(cantidad, placaVideo) {
            switch (placaVideo) {
                case "GTX1660":
                    return ((cantidad * precioUno) / 540);
                    break;

                case "RTX3060":
                    return ((cantidad * precioDos) / 540);
                    break;

                case "RTX3080":
                    return ((cantidad * precioTres) / 540);
                    break;
            }
        }
    }
    let resultado = calculadora(cantidad, placaVideo);
    alert(`El monto a pagar es: $ ${parseInt(resultado)}`);
    alert("Gracias por su compra nos vemos pronto 👌👌")
}



// alert("Bienvenido a DigitalStore");
// alert("Contamos con las siguientes placas de video en stock");
// alert(" GTX1660s , RTX3060, RTX3080")
// let formaPago = prompt("Ingrese forma de pago = $ o u$d");
// let placaVideo = prompt("Ingrese la placa de video que busca");
// let cantidad = parseInt(prompt("ingrese la cantidad que desa comprar"));

// let precioUno = 100000;
// let precioDos = 150000;
// let precioTres = 250000;

// if (formaPago == "$"){

//     function calculadora(cantidad, placaVideo) {
//         switch (placaVideo) {
//             case "GTX1660S":
//                 return cantidad * precioUno;
//                 break;

//             case "RTX3060":
//                 return cantidad * precioDos;
//                 break;

//             case "RTX3080":
//                 return cantidad * precioTres;
//                 break;
//         }
//     }
// }else if (formaPago =="u$d"){
//     function calculadora(cantidad, placaVideo) {
//         switch (placaVideo) {
//             case "GTX1660S":
//                 return ((cantidad * precioUno)/540);
//                 break;

//             case "RTX3060":
//                 return ((cantidad * precioDos)/540);
//                 break;

//             case "RTX3080":
//                 return (cantidad * precioTres)/540;
//                 break;
//         }
//     }
// }

// let resultado = calculadora(cantidad, placaVideo);
// alert(`El monto a pagar es: $ ${parseInt(resultado)}`)

