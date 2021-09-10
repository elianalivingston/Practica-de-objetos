/* 
Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
    Nombre del titular.
    Número de cuenta.
    Apellido del titular.
    Saldo.
    Movimientos.
*/

function CreateAccountBank ({ name, account, surname, amount, move }) {
    this.name = name
    this.account = account
    this.surname = surname
    this.amount = amount
    this.move
}

const cuentaBancaria = new CreateAccountBank({ 
    name: 'Eliana', 
    account: '3232335245345',
    surname: 'Livingston',
    amount: 400,
    move: ['movimiento 1', 'movimiento 2']
})

console.log(cuentaBancaria)