function calculateBMI(){

    const weight =
    parseFloat(
        document.getElementById("weight").value
    );

    const height =
    parseFloat(
        document.getElementById("height").value
    );

    if(!weight || !height){

        alert(
            "Please enter weight and height"
        );

        return;
    }

    const bmi =
    weight /
    ((height / 100) * (height / 100));

    let category = "";

    if(bmi < 18.5){

        category = "Underweight";

    }else if(bmi < 25){

        category = "Normal Weight";

    }else if(bmi < 30){

        category = "Overweight";

    }else{

        category = "Obese";

    }

    document.getElementById(
        "bmiValue"
    ).innerHTML =
    bmi.toFixed(2);

    document.getElementById(
        "bmiCategory"
    ).innerHTML =
    category;
}

function resetBMI(){

    document.getElementById(
        "weight"
    ).value = "";

    document.getElementById(
        "height"
    ).value = "";

    document.getElementById(
        "bmiValue"
    ).innerHTML = "0.00";

    document.getElementById(
        "bmiCategory"
    ).innerHTML = "-";
}