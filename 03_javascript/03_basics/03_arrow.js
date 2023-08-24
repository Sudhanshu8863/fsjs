const user = {
    username: "sudhanshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sudhanshu"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sudhanshu"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sudhanshu"
    console.log(this);
}


// chai()


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

// return an object
const addTwo = (num1, num2) => ({username: "sudhanshu"})


// console.log(addTwo(3, 4))

