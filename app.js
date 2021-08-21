function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById('pin-input').value = pin;
}

document.getElementById('pin-generate').addEventListener('click', function () {
    generatePin();
});


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
        const newNumber = previousNumber + number
        calcInput.value = newNumber;
    }
    
});



document.getElementById('verify-pin').addEventListener('click', function () {
    const pinInput = document.getElementById('pin-input').value;
    const keyPad = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('success');
    const errorMessage = document.getElementById('fail');
    if (pinInput == keyPad) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
})