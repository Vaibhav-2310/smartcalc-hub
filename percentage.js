function calculatePercentage(){

const percent =
parseFloat(
document.getElementById(
"percent"
).value
);

const number =
parseFloat(
document.getElementById(
"number"
).value
);

if(!percent || !number){

alert(
"Please enter values"
);

return;
}

const result =
(percent * number) / 100;

document.getElementById(
"percentageResult"
).innerHTML =
result.toFixed(2);

}



function calculateIncrease(){

const oldValue =
parseFloat(
document.getElementById(
"oldValue"
).value
);

const newValue =
parseFloat(
document.getElementById(
"newValue"
).value
);

if(!oldValue || !newValue){

alert(
"Please enter values"
);

return;
}

const increase =

((newValue - oldValue)
/ oldValue)
* 100;

document.getElementById(
"increaseResult"
).innerHTML =

increase.toFixed(2)
+ "%";

}



function calculateDecrease(){

const oldValue =
parseFloat(
document.getElementById(
"oldValue2"
).value
);

const newValue =
parseFloat(
document.getElementById(
"newValue2"
).value
);

if(!oldValue || !newValue){

alert(
"Please enter values"
);

return;
}

const decrease =

((oldValue - newValue)
/ oldValue)
* 100;

document.getElementById(
"decreaseResult"
).innerHTML =

decrease.toFixed(2)
+ "%";

}