function AmountChange() {
    document.getElementById('txt-amount').value = document.getElementById('range-amount').value;
}

function YearsChange() {
    document.getElementById('txt-years').value = document.getElementById('range-years').value;
}
function InterestChange() {
    document.getElementById('txt-interest').value = document.getElementById('range-interest').value;
}

function CalculateClick() {
    var principleAmount = parseInt(document.getElementById("txt-amount").value);
    var years = parseInt(document.getElementById("txt-years").value) * 12;
    var interestRate = parseFloat(document.getElementById("txt-interest").value) / 12 / 100;

    var emi = principleAmount * interestRate * Math.pow(1 + interestRate, years) / Math.pow(1 + interestRate, years) - 1

    document.getElementById("result").innerHTML = "Your monthly installment is  <span class='text-primary'> <b> &#8377;" + Math.round(emi) + "</b></span> for &#8377; " + principleAmount + " in " + years + " years. "
}


function AmountTxtBoxChange() {

    document.getElementById("range-amount").value = document.getElementById("txt-amount").value
}
function YearTxtBoxChange() {
    document.getElementById("range-years").value = document.getElementById("txt-years").value
}

function RateTxtBoxChange() {
    document.getElementById("range-interest").value = document.getElementById("txt-interest").value
}