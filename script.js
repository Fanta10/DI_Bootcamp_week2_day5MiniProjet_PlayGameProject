/* ************************* DAILY CHALENGE ***************************** */

/** 
*@author : KAMATE Fanta
*@date : 30/12/2022
*@description: deviner la valeur que l'ordinateur à en tête
*@param:
*@returns: retoune une alert
*/

let compter = 0;
let userNumber;
let computerNumber;

// cette fonction genère les différntes valeurs saisies par le joueur 
function playTheGame(){
    let quizUser = confirm(" would like to play the game");
    console.log(quizUser);
    if(Boolean(quizUser) == false){
        alert("No problem, Goodbye");
    }
    else {
        userNumber = prompt("enter a number between 0 and 10 ");
        let typeConverti = parseInt(userNumber);
        console.log(typeof(typeConverti));
        if(isNaN(typeConverti) == true){
            alert("Sorry Not a number, Goodbye");

        }
        else 
        if(userNumber > 0 && userNumber < 10){
            computerNumber = Math.random();
            let computerNumberCoverti =  computerNumber.toFixed();
             console.log(computerNumberCoverti);
           
        }
        else{
            alert("Sorry it's not a good number, Goodbye");
           
        }
    }
}


//cette fonction compare la valeur saisie par l'utilisateur et le
//nombre généré par l'ordinateur aléatoirement et retourne une alert

function compareNumbers(userNumber , computerNumber){
    
    if(userNumber == computerNumber){
        alert(" WINNER ");
        
    }
    else 
    if(userNumber > computerNumber){
        

        while(compter <= 3 ){
            userNumber = prompt("Your number is bigger then the computer's, guess again");
            compter = compter + 1;

        
       
        if(compter > 3){
            alert("out of chances");
        }
        }
    }
    else 
    if(userNumber < computerNumber){
        while(compter <= 3){
            userNumber = prompt("Your number is smaller then the computer's, guess again");
        compter = compter + 1;

        
        
        if(compter > 3){
            alert("out of chances");
        }
    }
    }

}
playTheGame();
compareNumbers(4,1);