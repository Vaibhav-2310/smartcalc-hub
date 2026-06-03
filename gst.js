function formatCurrency(value){

    return new Intl.NumberFormat(
        "en-IN",
        {
            style:"currency",
            currency:"INR"
        }
    ).format(value);

}


// Add GST

function addGST(){

    const amount =
    parseFloat(
        document.getElementById("amount").value
    );

    const rate =
    parseFloat(
        document.getElementById("gstRate").value
    );

    if(!amount){
        alert("Please enter amount");
        return;
    }

    const gstAmount =
    amount * rate / 100;

    const finalAmount =
    amount + gstAmount;

    document.getElementById("gstAmount").innerHTML =
    formatCurrency(gstAmount);

    document.getElementById("finalAmount").innerHTML =
    formatCurrency(finalAmount);

}



// Remove GST

function removeGST(){

    const amount =
    parseFloat(
        document.getElementById("inclusiveAmount").value
    );

    const rate =
    parseFloat(
        document.getElementById("reverseRate").value
    );

    if(!amount){
        alert("Please enter amount");
        return;
    }

    const originalAmount =
    amount / (1 + rate/100);

    document.getElementById("originalAmount").innerHTML =
    formatCurrency(originalAmount);

}



// CGST + SGST

function splitGST(){

    const amount =
    parseFloat(
        document.getElementById("splitAmount").value
    );

    const rate =
    parseFloat(
        document.getElementById("splitRate").value
    );

    if(!amount){
        alert("Please enter amount");
        return;
    }

    const totalGST =
    amount * rate / 100;

    const cgst =
    totalGST / 2;

    const sgst =
    totalGST / 2;

    document.getElementById("cgstResult").innerHTML =
    formatCurrency(cgst);

    document.getElementById("sgstResult").innerHTML =
    formatCurrency(sgst);

}



// IGST

function calculateIGST(){

    const amount =
    parseFloat(
        document.getElementById("igstAmount").value
    );

    const rate =
    parseFloat(
        document.getElementById("igstRate").value
    );

    if(!amount){
        alert("Please enter amount");
        return;
    }

    const igst =
    amount * rate / 100;

    document.getElementById("igstResult").innerHTML =
    formatCurrency(igst);

}