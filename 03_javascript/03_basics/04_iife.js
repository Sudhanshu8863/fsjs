// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// let name1 = 'hii'
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    // console.log(`DB CONNECTED TWO ${name1}`);
} )('sudhanshu')

// anything which is not inside this IIFE function, is not accessable and it is neccessary to use semi-colon because when when you are using two IIFE immediately after then it does not know where to stop that execusion