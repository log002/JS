const accountId = 144553 // can't be changed
let accountEmail = "sid@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not recommended to declare like this but it can be done without errors
let accountState

// accountId = 2  // not allowed

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "2112"
accountCity = "Pune"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
