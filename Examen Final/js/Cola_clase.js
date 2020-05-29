class Cola {
    constructor() {
        this.cola = [];
    }

    enqueue(element) {
        this.cola.push(element);
        return this.queue;
    }

    dequeue() {
        return this.cola.shift();
    }

    peek() {
        return this.cola[0];
    }

    size() {
        return this.cola.length;
    }

    isEmpty() {
        return this.cola.length === 0;
    }

    print() {
        return this.cola;
    }
}

console.log("PROBANDO 'Cola_clase.js'");

const cola = new Cola();
console.log(cola.enqueue('Manuelito'));
console.log(cola.enqueue('Panchito'));
console.log(cola.enqueue('Bananin'));
console.log(cola.dequeue());
console.log(cola.peek());
console.log(cola.isEmpty());
console.log(cola.print());

console.log("FIN de la prueba 'Cola_clase.js'");