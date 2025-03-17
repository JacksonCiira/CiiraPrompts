const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Welcome to The Arena,", name,)

const shouldWePlay = prompt("Do you want to play?  ")
const test = shouldWePlay.toLowerCase() === "yes"      /*----  .toLowerCase() helps overide capitalizing issues*/
if (test){
    console.log("Great, Let's Start...")
} else if (shouldWePlay ==="no") {
    console.log("Okay, until next time, Bye!")
    console.log("Exiting");
    process.exit();

} else console.log("invalid input")


    //Game logic
const leftOrRight = prompt("You enter a maze, do you go left or right? ")
const side = leftOrRight ==="left"
console.log("You see a bridge and run towards it...")
if (side ==="left") {            
    }        const cross = prompt("Do you want to cross? ")
        const condition2 = cross === "yes"
                if (condition2){
            console.log("On reaching the other side, two bags lie there, one is full of cash the other full of stolen diamonds.")

            const bag =prompt("Which do you pick,the bag of Cash or Diamonds ")
            if (bag === "cash"){
                console.log("You out it belongs to the mafia")
                const choice = prompt("do you take it or report to the mafia? ")
                    if (choice ==="take"){
                        console.log("where do you take the money?")
                         const place = prompt("bank or hide? ")
                            if (place === "bank"){
                                console.log("the bank wants a high premium , 33%, do you agree? ")
                                  
                            }else if (place === "hide"){
                                console.log("where do you hide it?")
                                const chocheh = prompt("the caves near the beach or a hole in the woods? ")
                                  if (chocheh === "caves"){
                                    console.log("the tide comes and pulls it into the ocean.")
                                    console.log("...............easy come easy go!")
                                  }
                                  else if(chocheh ==="woods"){
                                    console.log("")
                                  }
                            }

                    }else if (choice === "report"){
                        console.log("you are given a position in the mafia.")
                        const rank = prompt( "enforcer or accountant")
                    }
            }else if (bag === "diamonds"){
                console.log("the diamonds are valuable, you need to find a market  ")
            }

        } else if (condition2 = cross ==="no") {
            console.log("go back to the caves")
        }


    
else if( side=== "right") {
    console.log("you keep walking into the misty forest on your right...")
}