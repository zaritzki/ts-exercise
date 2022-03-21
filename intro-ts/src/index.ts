//** Basic Types */
let id: number = 5
let company: string = 'DotZar Solution'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

//** Tuple */
let person: [number, string, boolean] = [1, 'Zar', true]

//** Tuple Array */
let employee: [number, string][]

employee = [
	[1, 'Zar'],
	[2, 'iZa'],
	[3, 'Yana'],
	[4, 'Zaniel'],
]

//** Union */
let uid: string | number = 22
uid = '22'

//** Enum */
//--> By default 0,1,2,3
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}
console.log(Direction1.Up)
//--> 0  - by default
//--> 1

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}
console.log(Direction2.Left)
//--> Left

//** Objects */
type User = {
	id: number
	name: string
}
const user: User = {
	id: 1,
	name: 'Zar',
}

//** Type Assertion */
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//** Functions */
function addNum(x: number, y: number): number {
	return x + y
}
console.log(addNum(1, 2))
//--> 3

//** Void */ - void return type
function log(message: string | number): void {
	console.log(message)
}
log('login')
//--> login

//** Interfaces */
//--> ? will be optional property
//--> readonly property
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}
const user1: UserInterface = {
	id: 1,
	name: 'Zar',
}

// user1.id = 5
//--> error as its only read-only property

//--> Diff is type you can have a union
// interface Point = number | string  -- will be error, preferrably for object
type Point = number | string
const p1: Point = 1

interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
	id: number
	name: string
	register(): string
}

//** Classes */
//--> public: by default
//--> private: only available within the class
//--> protected: only available within the class and or any class extended this class

//--> to use the interface above 'PersonInterface', we use 'implements'
// class Person {
class Person implements PersonInterface {
	id: number // protected id: number
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	// method
	register() {
		// return 1
		//--> Property 'register' in type 'Person' is not assignable to the same property in base type 'PersonInterface'.
		//--> Type 'number' is not assignable to type 'string'.ts(2416)
		//--> Type 'void' is not assignable to type 'string'.

		return `${this.name} is now registered`
	}
}

const zar = new Person(1, 'Zar')
const iza = new Person(2, 'iZa')

console.log(zar, iza)
//--> Person { id: 1, name: 'Zar' } Person { id: 2, name: 'iZa' }

// zar.id = 8
//--> Property 'id' is private and only accessible within class 'Person'.

console.log(zar.register())
//--> Zar is now registered

//** Subclasses */
class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const yana = new Employee(3, 'Yana', 'Student')
const zaniel = new Employee(4, 'Zaniel', 'Student')

console.log(yana, zaniel)
//--> Employee { id: 3, name: 'Yana', position: 'Student' } Employee { id: 4, name: 'Zaniel', position: 'Student' }

console.log(yana.register())
//--> Yana is now registered

//** Generics */
//--> T : generics type or a placeholder
//-->  eg: getArray<T>(items: T[]): T[]
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}
//-->  eg: getArray<number>()
let numArray = getArray<number>([1, 2, 3, 4])
//-->  eg: getArray<string>()
let strArray = getArray<string>(['Zar', 'iZa', 'Yana', 'Zaniel'])

// numArray.push('hello')
//--> Argument of type 'string' is not assignable to parameter of type 'number'.
