 let user = 0;
 let computer = 0;
 shootNumber = S = 2;
 let shoot = 1 ;
 let score1;
 let score2;
 for (let x = 0 ; x < S ; x++) {
 score1 = Math.floor(Math.random()*6 +1);
 user = score1 ;
 console.log("user your score is :" + score1);

 score2 = Math.floor(Math.random()*6 +1);
 computer = score2 ;
 console.log("computer your score is :" + score2 );

 
 if ( user < computer ) {
    console.log("Awsome !! computer win!You score is :" + score2); 
 }else if( user > computer ) {
    console.log( "Awsome !! user win!You score is :" + score1); 
 }else if (user = computer )   {
    console.log("try again" ); 
 }
}
 