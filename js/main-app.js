function getPinCode(){
    const pinCode = Math.round(Math.random() * 1000000);
    const pinLength = pinCode + '';
    if(pinLength.length == 6){
        return pinCode;
    }
    else{
        // console.log('Your pin is invalid get another one!', pinCode);
        // return pinCode;
    }
}
// display the pin code
function displayPinNumber(){
    const disPlayPin = getPinCode();
    document.getElementById('display-pin').value = disPlayPin;
}

// add number in the calc keypad box!
document.getElementById('calculator-keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('numbers-typed');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

// show success or fail message!
function verifyPinCode(){
    const currentPin = document.getElementById('display-pin').value;
    const numberTyped = document.getElementById('numbers-typed').value;

    const notifySuccess = document.getElementById('notify-success');
    const failedError = document.getElementById('notify-fail');

    if(currentPin == numberTyped){
        notifySuccess.style.display = 'block';
        failedError.style.display = 'none';
    }
    else{
        failedError.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}
