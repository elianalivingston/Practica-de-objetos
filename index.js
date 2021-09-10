/* 
Crear un objeto CuentaBancaria mediante una función constructora que contenga los siguientes datos:
    Nombre del titular.
    Número de cuenta.
    Apellido del titular.
    Saldo.
    Movimientos.
*/

/*
Crear métodos para:
    Mostrar el nombre completo del titular.
    Debitar dinero de la cuenta. Si no tiene saldo suficiente tiene que mostrar un mensaje por consola y no realizar la operación.
    Acreditar dinero en la cuenta.
    Mostrar el saldo de la cuenta.
    Mostrar el historial de movimientos
*/

function CreateAccountBank ({ name, account, surname, amount }) {
    this.name = name
    this.account = account
    this.surname = surname
    this.amount = amount
    this.move = []
}

CreateAccountBank.prototype.getFullName = function() {
    return this.name + ' ' + this.surname
}

CreateAccountBank.prototype.removeAmount = function(amount){
    if(typeof amount === 'string' || typeof amount === 'number') {
        if(amount > this.amount) throw 'No tienes saldo suficiente!'
        this.amount -= parseFloat(amount)
        this.move.push({ title: 'Move -' + amount, amount: amount })
    } else {
        throw 'El monto no es un valor valido'
    }
}

CreateAccountBank.prototype.addAmount = function(amount) {
    if(typeof amount === 'string' || typeof amount === 'number') {
        this.amount += parseFloat(amount)
        this.move.push({ title: 'Move +' + amount, amount: amount })
    } else {
        throw 'El monto no es un valor valido'
    }
}

CreateAccountBank.prototype.getAmount = function() {
    return this.amount
}

CreateAccountBank.prototype.getMove = function(){
    return this.move.map(m => m.title).join(' ')
}

const cuentaBancaria = new CreateAccountBank({ 
    name: 'Eliana', 
    account: '3232335245345',
    surname: 'Livingston',
    amount: 400,
    move: []
})

console.log(cuentaBancaria)
console.log(cuentaBancaria.getFullName())
cuentaBancaria.removeAmount(200)
cuentaBancaria.addAmount(200)
console.log(cuentaBancaria.getAmount())
console.log(cuentaBancaria.getMove())
console.log(cuentaBancaria)
