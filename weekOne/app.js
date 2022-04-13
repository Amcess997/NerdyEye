// # checking the asynchronous nature of node.js
// # console.log("first statement")
// # setTimeOut(()=>{

// #     console.log("second statement")
// # }, 5000)
// # console.log("third statement")

// # local and global variables
// #  let i = 5000
// # const f = ()=>{
// #     let j = 6000
// #     console.log(j)
// # }
// # f()
// # console.log(i)

//classes
// const obj ={
//     name: "name",
//     profession: "profession"
// }
// # how to write classes
// class Indigen {
//     constructor(name, profession, age){
//         this.name=name
//         this.profession=profession
//         this.age=age
//     }
// }

// const person = new Indigen("John Doe", "Developer", "45")
// const person1 = new Indigen("Mfonabasi", "Backend-Developer", "35")
// console.log(person)

// const animals = ['dog', 'cat', 'bird']
//const ani = animals.join(',')
//animals.unshift('snake')
// const ani = animals.join(',')

//let text = animals.toString()

// console.log(ani)

// const newArray = ani.split(",")
// console.log(newArray)

//function declaration
// sayHello("nkechi")
// function sayHello(name){
//     console.log(`Hello ${name}`)
// }
// sayHello("Propser")

//function Expression
//Annoynomus function => doesnt have a name

// (()=> {
//     console.log("Hello World")
// })()//immediately invocked function expression

// !function(){
//     console.log("hello World.js")
// }();

//NODE GLOBAL VARIABLES

// const direct = __dirname
// const fileName = __filename
// console.log(direct)
// console.log(fileName)