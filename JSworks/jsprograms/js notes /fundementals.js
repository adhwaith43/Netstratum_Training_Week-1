// // // Comments

// // // single line - //

// // // multi line comments- /*...*/



// // // Variables


// // var x =20;

// // let x=20;


// // const x=20;//constant

// // x=x+10

// // console.log(x)



// //Datatypes 


// //primitive type

// // int
// // float
// // string
// // boolean
// // null
// // undefined


// var companyname="luminar" ; //string 
// console.log(companyname.length)
// var noofemployees=200 ; //int
// var rating=5.0 ; //float
// var isopen=true //float

// var x= null //null //empty value

// var y; //undefined //declared but not assigned any value
// console.log(y)



// // non primitive types

// // arrays and objects

// var a=[10,20,30]
// var a1=['red','black']
// var b2=[23,'red','black',23]

// console.log(typeof(a))
// console.log(a.length)
// console.log(a[0])
// console.log(a[-1]) //error
// //objects


// //var obj={property:Value,property:value}
// var p={'name':'arun','age':21,'place':'kollam'}

// console.log(p['name'])
// console.log(p.name)
// console.log(typeof(p))



// Operators

// Arithmetic >>   =,-,*,/,%,**,++(autoincrement),--(autodecrement)
// relational >>   ==,===,!=,<,>,<=,=>


// var a=10;
// var b='10';
// console.log(a==b) //compare only values
// console.log(a===b) //compares both types and values

// assignment >>   +=,-=,/=,*=,%=,**=
// logical    >>   &&(and),||(or),!(not)
// ternary operator(?:) //conditional rendering 

// (condition)?statements if condition true:statements to execute if condition false


//template literal

// var n="Arun";
// var a=23;

// console.log('name is',n,'age is',a);

// console.log(`name is ${n} and age is ${a}`)



//Decision Making statemnts

// if - else
// // if-elseif-else
//     if(condition1){
//         // statments to execeute if condition1 is true
//     }
//     else if (condition2){
//         // statemtns to execute if condition2 is true
//     }
//     else{
//         // statements to execute if all the above conditions are false
//     }


// prints 'fizz' if number is divisible by 5
// prints 'buzz' if number is divisible by 3
// prints 'fizzbuzz' if number is divisible by 15


// var a=150
// if (a%15==0){
//     console.log("fizzbuzz")
// }
// else if (a%3==0){
//     console.log("buzz")
// }
// else if (a%5==0){
//     console.log("fizz")
// }
// else{
//     console.log("invalid input")
// }

// nested if
// switch case

// switch(expression){
//     case value1:
//         // statemets to execute if case value matches with value of expression
//         break;
//     case value2:
//         // statemets to execute if case value matches with value of expression
//         break;
//     case value3:
//         // statemets to execute if case value matches with value of expression
//         break;
//     case value4:
//         // statemets to execute if case value matches with value of expression
//         break;
//     default:
//         // statment to exclude
//         break;
// }
 
// var day="tuesday"
// switch(day){
//     case 'sunday':
//         console.log('first day')
//         break

//     case 'monday':
//         console.log('second day')
//         break

//     case 'tuesday':
//         console.log('third day')
//         break
//     default:
//         console.log('invalid')
// }

// var x=22;

// // if (x%2==0){
// //     console.log("even")
// // }
// // else{
// //     console.log("odd")
// // }

// (x%2==0)?console.log('even'):console.log("odd")



// class in javascript


// class Person{
//     constructor(a,n){
//         this.name=a
//         this.age=n
//     }
//     show(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }

// let p= new Person('adhwaith',22)
// p.show()







//////setTimeout



//  console.log("Start")

// setTimeout(() => {
//   console.log("Inside timeout")
// },2000)

// console.log("End")



// const p = new Promise((resolve,reject)=>{

//  setTimeout(()=>{
//   resolve("Data received")
//  },2000)

// let a= 1 +1

// if(a==2){
//     resoleve("succes")
// }
// else{
//     reject("Failed")
// }

// })

// p.then((result)=>{
//  console.log(result)
// })


// js practice


// async function getusers() {

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/limit-10") 
//     const data= await res.json()

//     console.log(data)

//     data.array.forEach(element => {
//         console.log(`${element.id} + ${element.title}`)
//     });

// getusers();



// promise

const myPromise = new Promise((resolve, reject) => {

    let foodReady = true

    if(foodReady){
        resolve("Pizza delivered")
    } else {
        reject("Restaurant closed")
    }

})

myPromise
.then(result => console.log(result))
.catch(error => console.log(error))