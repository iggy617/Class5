var gNumber = document.getElementById("num");
var numberDisp = document.getElementById("display");
var answer = Math.round(Math.random() * 100) + 1
var score = 100;

document.getElementById("guess").addEventListener("click", function () {

    //console.log(parseInt("8")+1);
    var realNum = parseInt(gNumber.value);
    
    if (gNumber.value == answer){
        numberDisp.innerHTML = "Correct! Score: "+score;
    } else {
        //numberDisp.innerHTML = "Wrong!";
        if(realNum > answer){
            numberDisp.innerText = "Too big";
        } else if (realNum < answer){
            numberDisp.innerText = "Too small";
        }
        score = score - 1;
    }

});
