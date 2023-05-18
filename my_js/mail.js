

const emailList = [ "patrickhell19@yahoo.fr", "patrick@yahoo.it", "jeanpatrick@yahoo.fr", "rodrigue@yahoo.it"];
let user = prompt(" inserisci la tua Email");
let email =  false;

    for (let x = 0 ; x < emailList.length ; x++) {
       
        if ( user ===  emailList[x]) {
             email = true;
        } 
        } 
        
        if (email ) {
            console.log("continue");
        } else {
            console.log("try again");
        }
            
       
        
       