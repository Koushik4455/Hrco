// carousel - 1
var myText = 'HR OUTSOURCING';

var myArray = myText.split("");

var loopTimer;

function frameLooper() {

    if (myArray.length > 0) 
    {

        document.getElementById("type_text").innerHTML += myArray.shift();

    } 
    else 
    {

        clearTimeout(loopTimer);

        return false;

    }

    loopTimer = setTimeout('frameLooper()', 350);

}

frameLooper();


// carousel - 2
var myText1 = 'EXECUTIVE SEARCH';

var myArray1 = myText1.split("");

var loopTimer1;

function frameLooper1() {

    if (myArray1.length > 0) 
    {

        
        document.getElementById("type_text1").innerHTML += myArray1.shift();

    } 
    else 
    {

        clearTimeout(loopTimer1);

        return false;

    }

    loopTimer1 = setTimeout('frameLooper1()', 350);

}

frameLooper1();

