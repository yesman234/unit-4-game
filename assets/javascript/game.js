var randomNumber = (Math.floor(Math.random() * 51)+1);
var smallNum =  (Math.floor(Math.random() * 12)+1);
var smallNum1 = (Math.floor(Math.random() * 12)+1);
var smallNum2 = (Math.floor(Math.random() * 12)+1);
var smallNum3 = (Math.floor(Math.random() * 12)+1);
var total_score = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {
    function reset () {
    total_score = 0
    document.querySelector("#totalscore").innerHTML = total_score;
    randomNumber = Math.floor(Math.random() * 51);
    document.querySelector("#rando").innerHTML = randomNumber;
   }

   document.querySelector("#rando").innerHTML = randomNumber;
    document.querySelector("#totalscore").innerHTML = total_score;

//set variables

function checkforwins() {
    if (total_score === randomNumber) {
        wins++;
        document.querySelector("#howmany_wins").innerHTML = wins;
        reset();
     }

    if (total_score > randomNumber) {
        losses++;
        document.querySelector("#howmany_losses").innerHTML = losses;
        reset();
    }
   }


      $(".gun-1").on("click", function() {
        total_score=total_score+smallNum;
        document.querySelector("#totalscore").innerHTML=total_score;
        checkforwins()

        });
      $(".gun-2").on("click", function() {
        total_score=total_score+smallNum1;
        document.querySelector("#totalscore").innerHTML=total_score;;
        checkforwins()
        });
      $(".gun-3").on("click", function() {
        total_score=total_score+smallNum2;
        document.querySelector("#totalscore").innerHTML=total_score;;
        checkforwins()
      });
      $(".gun-4").on("click", function() {
        total_score=total_score+smallNum3;
        document.querySelector("#totalscore").innerHTML=total_score;;
        checkforwins()
      });





});

