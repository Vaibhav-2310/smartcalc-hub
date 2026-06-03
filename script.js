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

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Total days lived
    const diffTime = today - birthDate;

    const totalDays = Math.floor(
        diffTime / (1000 * 60 * 60 * 24)
    );

    // Next Birthday
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

    const remainingDays = Math.ceil(
        remainingTime /
        (1000 * 60 * 60 * 24)
    );

    // Update Result Cards
    document.getElementById("years").innerText =
        years;

    document.getElementById("months").innerText =
        months;

    document.getElementById("days").innerText =
        days;

    document.getElementById("totalDays").innerHTML =
        `Total Days Lived: <strong>${totalDays}</strong>`;

    document.getElementById("birthday").innerHTML =
        `Next Birthday In: <strong>${remainingDays} Days</strong>`;
}

function resetForm() {

    document.getElementById("dob").value = "";

    document.getElementById("years").innerText = "0";

    document.getElementById("months").innerText = "0";

    document.getElementById("days").innerText = "0";

    document.getElementById("totalDays").innerHTML =
        "Total Days Lived: 0";

    document.getElementById("birthday").innerHTML =
        "Next Birthday In: 0 Days";
}