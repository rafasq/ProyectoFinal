function Cola(){
    this._ultdt = 1;   
    this._nvdt = 0; //Size
    this._storage = []; //Storage
}

Cola.prototype.enqueue = function(elemento){
    this._storage[this._nvdt] = elemento;
    this._nvdt++;
    return this._storage[this._nvdt - 1]
}

Cola.prototype.dequeue = function(){    
    this._nvdt--;
    return this._storage.pop();
}

Cola.prototype.peek = function(){
    return this._storage[this._nvdt - 1]
}

Cola.prototype.size = function(){
    return this._storage.length-1;
}

Cola.prototype.print = function(){
    return this._storage
}

console.log("PROBANDO 'Cola_obj.js'");

let obj_cola = new Cola;

console.log(obj_cola.enqueue("Banana"));
console.log(obj_cola.enqueue("Manzana"));
console.log(obj_cola.enqueue("Pera"));
console.log(obj_cola.enqueue("Tomate"));
console.log(obj_cola.enqueue("Cebolla"));

console.log(obj_cola.size());

console.log(obj_cola.peek());

console.log(obj_cola.dequeue());

console.log(obj_cola.print());

console.log("FIN de la prueba 'Cola_obj.js'");