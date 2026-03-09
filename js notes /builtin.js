// // class 3

// // MATH

// Math.floor()
// Math.ceil()
// Math.sqrt()
// Math.pow()
// Math.round()
// Math.min()
// Math.max()
// Math.abs()
// Math.trunc()


// Date

let d=new Date() //creates current date object
console.log(d)
// d.getFullYear()
// d.getDate()
// d.getDay()
// d.getHours()
// d.getMinutes()
// d.getSeconds
// d.toString()
// d.toDateString()

// String

// at() --negative indexing works
// charAt() --negative indexing doesn't work

// indexOf()

// startsWith
// endsWith()

// repeat()
// includes()
// s.replace()
// s.replaceAll()

// slice() -forward direction only(step always 1)
// split()

// toLowerCase
// toUpperCase

// String()

// Number() --to convert a value into a number

// // define a function to find the number of vowels in a string

// function vowelcount(b){
//     let count=0
//     let a="aeiouAEIOU"
//     for (i of b){
//         if (a.includes(i)){
//             count++
//         }
//     }
//     console.log(count)
// }

// vowelcount("adhwaith","aeiouAEIOU")


// Array

// push -adds at end
// pop  -removes from last
// shift - removes from begining 
// unshift - adds at begining
// slice
// splice -splice to add delete and replace
        // splice(index,deletecount,element1,element2....)
// reverse
// indexOf
//map()/filter()/reduce()


// var obj={property:value,property:value}

// Object.entries(objectname)
// Object.keys(objectname)
// Object.values(objectname)

// Spread Syntax

// to create an independent copy of objects

// // in the case of array
// a=[...arrayname]

// // in the case of objects
// a={...objectname}




// class 4

// // (a)=>a**2
// a=[1,2,3,4]
// console.log(a.map((n)=>n**2))

// given an Array
// a=['red','green','blue','orange']
// // create a new array with the first character of each element from the given array
// d=(a)=>a[0]
// console.log(a.map(d))

// // given array
// a=[{'name':'arun','age':23,'place':'ekm'},
// {'name':'amal','age':25,'place':'tvm'},
// {'name':'anu','age':25,'place':'5f4'}]

// // create a new array with name values from the given array

// c=a.map((n)=>n.name +" "+ n.place)
// console.log(c)




// filter

// // filter even values

// a=[1,2,3,4,5]
// console.log(a.filter((n)=>(n%2==0)))

// // filter elements whose length >3

// a=['red','green','blue','yellow']

// console.log(a.filter((n)=>n.length>3))



// Reduce

// sum of array

// a=[1,2,3,4]

// console.log(a.reduce((a,b)=>a+b))


// // product of array

// console.log(a.reduce((x,y)=>x*y))




// DOM Manipulation methods