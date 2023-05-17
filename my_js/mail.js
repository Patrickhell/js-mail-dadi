



constVerification = document.querySelector("button");
const emailList = [ "patrickhell19@yahoo.fr", "patrick@yahoo.it", "jeanpatrick@yahoo.fr"];
let user = document.getElementById("email-user");
 constVerification.addEventListener( "click" , function() {
   

    for (let x = 0 ; x < emailList.length ; x++) {
        const outputElement = document.querySelector("p");
        if ( user.value === emailList [x]) {
            console.log("Your email is correct.Please continue");
            outputElement.innerHTML = "Your email-address is correct.Please continue!!"
        }
        }
        }
        );