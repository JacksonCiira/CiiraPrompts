const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Welcome,", name,);

const money = prompt("How much do you want to withdraw?  ");
let amount = money;
if (money < Number(100)) {
    console.log("Balance Too Low, Please Top Up....");
}else if (amount >= 100) {
        let password= prompt("Enter PIN  ");
     if (password === "042800"){
        console.log("Withdrawal Successfull!")
     }else {
        (console.log("Invalid input"))
     }
}
else {
    console.log("Exiting...");
    process.exit();
}
    

