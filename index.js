let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

function mostrarSaldo(){
    console.log(`Su saldo actual es ${saldo.toFixed(2)} €`)
}

function depositar(){
    const deposito = parseFloat(prompt("Ingrese la cantidad a depositar"));
    if(isNaN(deposito) || deposito <= 0){
        console.log("Cantidad inválida. Inténtalo de nuevo");
    }
    else{
        saldo += deposito;
        console.log(`Se han depositado ${deposito.toFixed(2)} €`);
        mostrarSaldo();
    }
}

function retirar(){
    const retiro = parseFloat(prompt("Ingrese la cantidad a retirar"));
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        console.log("Cantidad inválida. Inténtalo de nuevo");
    }
    else{
        saldo -= retiyo;
        console.log(`Se han retirado ${retiro.toFixed(2)} €`);
        mostrarSaldo();
    }
}

function transferir(){
    const transferencia = parseFloat(prompt("Ingrese la cantidad a transferir"));
    if(isNaN(transferencia) || transferencia <= 0 || transferencia > saldo){
        console.log("Cantidad inválida. Inténtalo de nuevo");
    }
    else{
        const cuentaDestino = prompt("¿A qué cuenta quieres mandar el dinero?");
        // esValidaEstructuraIBAN(cuentaDestino);
        saldo -= transferencia;
        console.log(`Se han transferido ${transferencia} € a ${cuentaDestino}`);
        mostrarSaldo();
    }
}

// function esValidaEstructuraIBAN(cuentaAValidar){
   // return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAValidar);
// }

function iniciarSesion(){
    let pin = prompt("Ingresa tu PIN:")
    while(pin !== PIN_CORRECTO && intentosRestantes > 1){
        intentosRestantes--;
        console.log(`PIN incorrecto, le quedan ${intentosRestantes} intentos`);
        pin = prompt("Introduce el PIN nuevamente");
    }
    if(pin == PIN_CORRECTO){
        console.log("Has iniciado sesión correctamente");
        mostrarSaldo();
        operacionesCajero();
    }
    else{
        console.log("PIN incorrecto. Largate de aqui BOBO");
    }
}

function operacionesCajero(){
    let continuar = true;

    while(continuar){
        console.log("Menú del Cajero:");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Transferir dinero");
        console.log("5. Salir");

        const opcion = prompt("¿Qué opción deseas elegir?");

        switch(opcion){
            case "1":
                mostrarSaldo();
                break;
            case "2":
                depositar();
                break;
            case "3":
                retirar();
                break;
            case "4":
                transferir();
                break;
            case "5":
                console.log("Has salido correctamente");
                continuar = false;
                break;
        }
    }
}