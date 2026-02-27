// // // syntax 
// // (parameters)=>expression

// // sum of two numbers
// (a,b)=>(a+b)

// // sum of three numbers
// (a,b,c) => (a+b+c)
// // square of a number
// (a)=>a**2
// // square root of a number
// (a)=>a**0.5
// // VALUE OF AN OBJECT PROPERTY
// var book={'name':'harrypotter','price':120 }
// (a)=>a.price

// function to find the number of occurences of a

// particular character inside a string(using arguments and parameters)
function occurences(a,n){
    count=0
    for(i of a){
        if (n==i){
            count++
        }
    }
    return count
}
