// fetch all element by querySelector

const inputSlider=docoument.querySelector("[data-lengthSlider]");

const lengthDisplay=docoument.querySelector("[data-lengthNumber]");

const passwardDisplay=docoument.querySelector("[data-passwardDisplay]");

const copyBtn=docoument.querySelector("[data-copy]");

const copyMsg=docoument.querySelector("[data-copyMsg]");

const uppercaseCheck=docoument.querySelector("#uppercase");

const lowercaseCheck=docoument.querySelector("#lowercaseCheck");

const numberCheck=docoument.querySelector("#number");

const symbolCheck=docoument.querySelector("#symbol");

const indicator=docoument.querySelector("[data-indicator]");

const generateBtn=docoument.querySelector(".generateButton");

const allCheckBox=docoument.querySelectorAll("input[type=checkbox]");

// make a string of symbol so that we can access random symbol 
const symbol = '~`!@#$%^&*()-_+={}[]|:;<>"?/.,';

// <!-- default case after loading ---/!>
let passward = "";
let passwardLength = 10; 
let checkCount = 1;

handelSlider();

// to set passward length
function handelSlider() {
    inputSlider.value = passwardLength;
    lengthDisplay.innerText = passwardLength;
}

function setIndicator() {
    indicator.style.backgroundColor = color;
}

function getRndInteger(min , max) {
   return Math.floor(Marh.random() * (max-min)) + min;
}
 
// checkbox tik function

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowercase() {
    return String.getRndInteger(97,123);
}

function generateUppercase() {
    return String.getRndInteger(65,91);
}

function generateSymbol() {
    const randNum = getRndInteger(0,symbol.length);
    return symbol.charAt[randNum];  //charAt to accecss element present on this index of string;
}

// for checking the passward strength

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseChecked.checked)hasUpper = true;
    if(lowercaseChecked.checked)hasLower = true;
    if(numberChecked.checked)hasNum = true;
    if(symbolsChecked.checked)hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwardLength >= 8) {
        setIndicator("#0f0");
    }
    else if(
        (hasLower || hasUpper) && (hasNum || hasSym) && passwardLength >= 6
    ) {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }
}

// for copy the content in clipboard

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwardDisplay.value);
        copyMsg.innerText="copied";
    }
    catch(e) {
        copyMsg.innerText= "Failed";
    }

    // need a timer visible time 
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

// main function to display passward by event listner 
inputSlider.addEventListner('input',(e)=>{
    passwardLength=e.target.value;
    handelSlider();
})

