function Pila(elemento){
    this.elemento = elemento;
    this.pila = [];
}

Pila.prototype.push = function(elemento){
    this.pila[this.pila.length]=this.elemento
    return this.elemento;
} 

Pila.prototype.pop = function(){
    return this.pila.pop();
} 

Pila.prototype.peek = function(){
    return this.pila[this.pila.length-1];
} 

Pila.prototype.size = function(){
    return this.pila.length;
} 

Pila.prototype.print = function(){
    return this.pila;
} 


console.log("PROBANDO 'Pila_const.js'");

let obj_Pila = new Pila("Banana");

console.log(obj_Pila.push());

console.log(obj_Pila.size());

console.log(obj_Pila.peek());

console.log(obj_Pila.pop());

console.log(obj_Pila.print());

console.log("FIN de la prueba 'Pila_const.js'");