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

function esValidaEstructuraIBAN(cuentaAValidar){
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(cuentaAValidar);
}

function iniciarSesion(){

}

function operacionesCajero(){

}