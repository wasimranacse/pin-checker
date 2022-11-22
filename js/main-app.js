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
function displayPinNumber(){
    const disPlayPin = getPinCode();
    document.getElementById('display-pin').value = disPlayPin;

}