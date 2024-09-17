
    let carrito = [];

    let ingreso = prompt(`Hola!! ingresa tu nombre de usuario`).toLocaleLowerCase();

    while (ingreso == '') {
        alert('No ingresaste un usuario correcto');
        ingreso = prompt(`Hola!! ingresa tu nombre de usuario`).toLocaleLowerCase();
    }

    alert(`${ingreso}, bienvenido a la tienda de bicicletas PRK`);

    function mostrarModelos(velocidad) {
        let modelos = [];
        let precios = {};

        if (velocidad === 'v24') {
            modelos = ['mountain bike cosmos', 'mountain bike andromeda', 'mountain bike helium'];
            precios = {
                'mountain bike cosmos': 500,
                'mountain bike andromeda': 600,
                'mountain bike helium': 550
            };
        } else if (velocidad === 'v21') {
            modelos = ['mountain bike ember', 'mountain bike storm', 'mountain bike blaze'];
            precios = {
                'mountain bike ember': 450,
                'mountain bike storm': 470,
                'mountain bike blaze': 480
            };
        } else {
            alert('No es un tipo de velocidad válido.');
            return; 
        }

        let modeloElegido = prompt(`Nuestros modelos de ${velocidad} son:\n${modelos.join('\n')}\nElige tu modelo:`);

        if (modeloElegido === null) {
            alert('uwu la operación fue cancelada.');
            return; 
        }

        modeloElegido = modeloElegido.toLowerCase();

        if (modelos.includes(modeloElegido)) {
            let precio = precios[modeloElegido];
            
            carrito.push({ modelo: modeloElegido, precio: precio });
            alert(`Se agrego al carrito el modelo: ${modeloElegido.charAt(0).toUpperCase() + modeloElegido.slice(1)}\nPrecio: $${precio}`);

            mostrarCarrito();
        } else {
            alert('No seleccionaste un modelo correcto.');
        }
    }

    function mostrarCarrito() {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let mensajeCarrito = "Productos en tu carrito:\n";
            let total = 0;

            carrito.forEach((producto, i) => {
                mensajeCarrito += `${i + 1}. ${producto.modelo.charAt(0).toUpperCase() + producto.modelo.slice(1)} - $${producto.precio}\n`;
                total += producto.precio;
            });

            mensajeCarrito += `\nTotal a pagar: $${total}`;
            alert(mensajeCarrito);
        }
    }

    let velocidad = prompt(`Elige tu tipo de velocidad\n v24 \n v21`);

    while (velocidad !== null) {  
        if (velocidad === 'v24' || velocidad === 'v21') {
            mostrarModelos(velocidad);  
        } else {
            alert('No es un tipo de velocidad válido');
        }

        velocidad = prompt(`Elige tu tipo de velocidad\n v24 \n v21 o presiona cancelar para salir`);
    }

    if (carrito.length > 0) {
        alert('Gracias por tus compras en la tienda de bicicletas PRK.');
        mostrarCarrito();
    } else {
        alert('Gracias por visitar la tienda de bicicletas PRK.');
    }



