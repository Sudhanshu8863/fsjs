const accountId = 14455321
let accountEmail = "sudhanshu565868@gmail.com"
var accountPassword = "12345"
accountCity = "Jharkhand"
let accountState;

// accountId = 24345344 // not allowed


accountEmail = "sm@sm.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])