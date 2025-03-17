const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Welcome, ",name);

const user = prompt("Are you a member or visitor? ");

if (user === "member") {
    let memberID = prompt("Enter Member ID  "); 
    let idPin = ["042800", "250325", "251223"];
     }
    if (idPin.includes(memberID)) {
      console.log("Proceed to make your Order,  ",name);
       const weight = prompt("How many grams do you want?  ");
            let amount = Number(weight);

        if (weight < Number(100)) {
           console.log("Amount Too Low, Top Up....");
            } else if (amount >= 100) {
            let password= prompt("Enter PIN  ");
            if (password = ["042800", "250325", "251223"]);
            console.log("Purchase Successfull!")
    }else {
          console.log("Invalid input") 
          console.log("Exiting...");
          process.exit();
        }
else{
    console.log("Member not Registered");
    }

}else if (user === "visitor") {
    const visitorId = prompt("Register to become member?  ");
    if (visitorId === ("yes"))    {
             console.log("processing...")
             console.log("opening account...");     //mpesa
        }else {
        console.log("Exiting....");
        process.exit();
    }
    const user = prompt("Enter  Your Full Names  ");
    let password = prompt("create PIN with 6 numbers ");
       if (password > (99999)) {
          console.log("Your Account is READY!");
    }else{
        console.log("Check Password");        
    }    
}
else{
    console.log("incorrect Details");
    process.exit();
 }
