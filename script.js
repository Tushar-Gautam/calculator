let displayxyz = document.getElementById("display");
let buttonsxyz = document.getElementsByClassName("btn");

console.log(buttonsxyz);

function isOpxyz(opxyz) {
    if (opxyz === '+' || opxyz === '-' || opxyz === '/' || opxyz === '*') {
        return true;
    }
    return false;//false condition if there r two operators occuring consectively
}
console.log(displayxyz);
function clicking(clickedxyz) {
    if (displayxyz.innerText === '') {
        if (clickedxyz != '0') {
            displayxyz.innerText = displayxyz.innerText + clickedxyz;
        }
    }

    else {

        if (isOpxyz(clickedxyz) && isOpxyz(displayxyz.innerText[displayxyz.innerText.length - 1])) {
            displayxyz.innerText = displayxyz.innerText.slice(0, -1); // condtion when v enter 2 operators together
            //here v update the last value
        }
        displayxyz.innerText = displayxyz.innerText + clickedxyz;
        //else we r just adding the imputs in r display
    }
}

function evalxyz() {
    try {
        displayxyz.innerText = eval(displayxyz.innerText);
    }
    catch (err) {
        displayxyz.innerText = "Error";
    }
}

function clearxyz() {
    displayxyz.innerText = "";
}

function backxyz() {
    displayxyz.innerText = displayxyz.innerText.slice(0, -1);
}