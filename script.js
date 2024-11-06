let currentStep = 1;
const totalSteps = 10;

document.getElementById(`step${currentStep}`).classList.add("active");

function goNext() {
    if (currentStep < totalSteps) {
        document.getElementById(`step${currentStep}`).classList.remove("active");
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add("active");
    } else {
        calculateDeathDate();
    }
}

function goBack() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove("active");
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add("active");
    }
}

function calculateDeathDate() {
    const dob = new Date(document.getElementById("dob").value);
    const diseases = document.getElementById("diseases").value;
    const alcoholic = document.getElementById("alcoholic").value;
    const water = document.getElementById("water").value;
    const personality = document.getElementById("personality").value;

    let ageFactor = dob.getFullYear() % 100;
    if (diseases === "yes") ageFactor -= 10;
    if (alcoholic === "yes") ageFactor -= 8;
    if (water === "no") ageFactor -= 5;
    if (personality === "aggressive") ageFactor -= 3;

    const predictedAge = 70 + ageFactor + Math.floor(Math.random() * 10);
    const deathYear = dob.getFullYear() + predictedAge;
    const deathDate = new Date(deathYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));

    document.getElementById("result").innerHTML = 
        `Your playful fate points to around <strong>${deathDate.toDateString()}</strong>. Make the most of every moment!`;
}