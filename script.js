const today = new Date();

document.getElementById("todayDate").innerHTML =
    today.toDateString();

document.getElementById("dob").max =
    new Date().toISOString().split("T")[0];

function calculateAge() {

    const dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your birth date");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        today.getMonth() -
        birthDate.getMonth();

    let days =
        today.getDate() -
        birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffTime = today - birthDate;

    const totalDays =
        Math.floor(
            diffTime /
            (1000 * 60 * 60 * 24)
        );

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today > nextBirthday) {
        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }

    const remainingTime =
        nextBirthday - today;

    const remainingDays =
        Math.ceil(
            remainingTime /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById("years").innerHTML =
        `${years} Years`;

    document.getElementById("months").innerHTML =
        `${months} Months`;

    document.getElementById("days").innerHTML =
        `${days} Days`;

    document.getElementById("totalDays").innerHTML =
        `Total Days Lived: ${totalDays}`;

    document.getElementById("birthday").innerHTML =
        `Next Birthday In: ${remainingDays} Days`;
}

function resetForm() {

    document.getElementById("dob").value = "";

    document.getElementById("years").innerHTML =
        "0 Years";

    document.getElementById("months").innerHTML =
        "0 Months";

    document.getElementById("days").innerHTML =
        "0 Days";

    document.getElementById("totalDays").innerHTML =
        "Total Days Lived: 0";

    document.getElementById("birthday").innerHTML =
        "Next Birthday In: 0 Days";
}