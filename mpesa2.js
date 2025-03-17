const prompt = require("prompt-sync")

const task = prompt("Do you want to send or withdraw? ")
const taskMessage = task === "send"
if (taskMessage){
    console.log("Enter Amount...  $")
} else {
    console.log("Withdraw money")
}