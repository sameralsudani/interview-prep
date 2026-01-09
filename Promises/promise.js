//Simple promise 
// Define a promise
let p = new Promise((resolve, reject)=>{  
    let a = 1+1
    if(a===2){
        resolve('Success')  // Success
    } else {
        reject('Failed')  // Failed
    }
})

// Call the promise 
p.then((message)=>{  // then would be called if promise is resolved
    console.log('this is in the then' + message)  // this is in the then Success
}).catch((error)=>{  // catch would be called if promise is rejected
    console.log('this is in the catch' + error)
})