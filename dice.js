let a = 0;
let b = 0;
let n = 1;
function rolling_dice(){

    if (a >= 30 || b >= 30)
    {
        location.reload();
        return;
    }

    let x = Math.floor(Math.random() * 6) + 1;

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
   
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");

    let sum1 = document.getElementById("sum1");
    let sum2 = document.getElementById("sum2");

     if( n%2 != 0)
    {
        a = a + x;
        num1.textContent = x;
        sum1.textContent = 'Team-1 Score: ' + a;
    }
    else
    {
        b = b + x;
        num2.textContent = x;
        sum2.textContent = 'Team-2 Score: ' + b;
    }

    n++;
    
        if( a >= 30)
        {
            score1.textContent='Hurray! Team 1 is the winner';

        }
        else if ( b >= 30)
        {
            score2.textContent='Hurray! Team2 is the winner';
        }
    }
