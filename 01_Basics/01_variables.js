const accountID = 12345
let accountEmail = "aamirshamimabc@gmail.com"
var accountPassword = "12345"
accountCity = "Dhanbad"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2 // not allowed 

accountEmail = "aamirshamim@gmail.com"
accountCity = "Jamshedpur"
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

