function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got less than 3 digits', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;
}

/* ------------ calculator-------------- */
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})
function verifypin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {

        failError.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}