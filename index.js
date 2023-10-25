let saldo = 1000;
const PIN_CORRECTO = "1234";
let intentosRestantes = 3;

function mostrarSaldo(){
    console.log(`Su saldo actual es ${saldo.toFixed(2)} €`)
}

function depositar(){
    const deposito = parseFloat(prompt("Ingrese la cantidad a depositar"))
    if(isNaN(deposito) || deposito <= 0){
        console.log("Cantidad inválida. Inténtalo de nuevo")
    }
    else{
        saldo += deposito;
        console.log(`Se han depositado ${deposito} €`);
        mostrarSaldo();
    }
}

function retirar(){

}

function transferir(){

}

function iniciarSesion(){

}

function operacionesCajero(){

}