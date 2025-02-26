                                            //random number guessing game
const random = Math.floor(Math.random() * 10 + 1);
let userNumber = +prompt("write any random number between 1 to 10")  
console.log(random);
if (userNumber < 1 || userNumber > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
}else if(userNumber!== random){
    alert("Wrong number, your number is " + userNumber + " and random number is " + random);
}else{
    alert("Congratulations! You've guessed the correct number.");
}
   





