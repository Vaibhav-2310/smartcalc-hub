function calculateEMI() {

    const principal =
        parseFloat(
            document.getElementById("loanAmount").value
        );

    const annualRate =
        parseFloat(
            document.getElementById("interestRate").value
        );

    const years =
        parseFloat(
            document.getElementById("loanTenure").value
        );

    if (
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years) ||
        principal <= 0 ||
        annualRate <= 0 ||
        years <= 0
    ) {
        alert("Please enter valid values.");
        return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    document.getElementById("emiResult").innerHTML =
        `Monthly EMI: ₹${emi.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        })}`;

    document.getElementById("totalPayment").innerHTML =
        `Total Payment: ₹${totalPayment.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        })}`;

    document.getElementById("totalInterest").innerHTML =
        `Total Interest: ₹${totalInterest.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        })}`;
}

function resetEMI() {

    document.getElementById("loanAmount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTenure").value = "";

    document.getElementById("emiResult").innerHTML =
        "Monthly EMI: ₹0";

    document.getElementById("totalPayment").innerHTML =
        "Total Payment: ₹0";

    document.getElementById("totalInterest").innerHTML =
        "Total Interest: ₹0";
}