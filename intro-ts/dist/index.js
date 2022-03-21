"use strict";
//** Basic Types */
let id = 5;
let company = 'DotZar Solution';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//** Tuple */
let person = [1, 'Zar', true];
//** Tuple Array */
let employee;
employee = [
    [1, 'Zar'],
    [2, 'iZa'],
    [3, 'Yana'],
    [4, 'Zaniel'],
];
//** Union */
let uid = 22;
uid = '22';
//** Enum */
//--> By default 0,1,2,3
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//--> 0  - by default
//--> 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'Zar',
};
//** Type Assertion */
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//** Functions */
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//--> 3
//** Void */ - void return type
function log(message) {
    console.log(message);
}
log('login');
const user1 = {
    id: 1,
    name: 'Zar',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//** Classes */
//--> public: by default
//--> private: only available within the class
//--> protected: only available within the class and or any class extended this class
//--> to use the interface above 'PersonInterface', we use 'implements'
// class Person {
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // method
    register() {
        // return 1
        //--> Property 'register' in type 'Person' is not assignable to the same property in base type 'PersonInterface'.
        //--> Type 'number' is not assignable to type 'string'.ts(2416)
        //--> Type 'void' is not assignable to type 'string'.
        return `${this.name} is now registered`;
    }
}
const zar = new Person(1, 'Zar');
const iza = new Person(2, 'iZa');
console.log(zar, iza);
//--> Person { id: 1, name: 'Zar' } Person { id: 2, name: 'iZa' }
// zar.id = 8
//--> Property 'id' is private and only accessible within class 'Person'.
console.log(zar.register());
//--> Zar is now registered
//** Subclasses */
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const yana = new Employee(3, 'Yana', 'Student');
const zaniel = new Employee(4, 'Zaniel', 'Student');
console.log(yana, zaniel);
//--> Employee { id: 3, name: 'Yana', position: 'Student' } Employee { id: 4, name: 'Zaniel', position: 'Student' }
console.log(yana.register());
//--> Yana is now registered
//** Generics */
//--> T : generics type or a placeholder
//-->  eg: getArray<T>(items: T[]): T[]
function getArray(items) {
    return new Array().concat(items);
}
//-->  eg: getArray<number>()
let numArray = getArray([1, 2, 3, 4]);
//-->  eg: getArray<string>()
let strArray = getArray(['Zar', 'iZa', 'Yana', 'Zaniel']);
// numArray.push('hello')
//--> Argument of type 'string' is not assignable to parameter of type 'number'.
