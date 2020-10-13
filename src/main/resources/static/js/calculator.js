var prevInput = '';
var result = 0;
var tempResult = 0;
var tempNumText = '';
var operator = '';
var prevResult = 0;
var numArr = document.getElementsByClassName('cnum');
var mOprArr = document.getElementsByClassName('opr');
var cInput = document.getElementById('cinput');
var cResult = document.getElementsByClassName('coutput')[0];

document.getElementsByClassName('ac')[0].addEventListener('click', clearAll);
document.getElementsByClassName('eql')[0].addEventListener('click', performEquals);

document.addEventListener('keypress', checkNumKeyPress);

for(i=0; i<mOprArr.length; i++) {
    mOprArr[i].addEventListener('click', callChangeOperator);
}

for(i=0; i<numArr.length; i++) {
    numArr[i].addEventListener('click', callPerformCalculation);
}

function performCalculation(numText) {
    tempNumText = tempNumText + numText;
    prevInput = cInput.value;
    cInput.value = cInput.value + numText;
    tempResult = parseInt(tempNumText);
    if(operator === '+') {
        result = prevResult + tempResult;
        cResult.value = result;
    } else if(operator === '-') {
        result = prevResult - tempResult;
        cResult.value = result;
    } else if(operator === 'x' || operator === '*') {
        result = prevResult * tempResult;
        cResult.value = result;
    } else if(operator === '/') {
        result = prevResult / tempResult;
        cResult.value = result;
    } else if(operator === '%') {
        result = (prevResult / 100) * tempResult;
        cResult.value = result;
    } else if(operator === '') {
        result = tempResult;
        cResult.value = result;
    }
}

function changeOperator(oprText) {
    if(cInput.value.trim() != '') {
        operator = oprText;
        cInput.value = cInput.value + operator;
        tempNumText = '';
        prevResult = result;
    }
}

function clearAll() {
    operator = '';
    tempNumText = '';
    prevResult = '';
    result = '';
    tempResult = '';
    cInput.value = '';
    cResult.value = 0;
}

function performEquals() {
    if(cInput.value.trim() != '') {
        operator = '';
        tempNumbText = '';
        tempResult = '';
        cInput.value = result;
    }
}

function printKey(e) {
    console.log(e.code)
}

function checkNumKeyPress(e) {
    var numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
    var symbols = ['+','-','*','/','%']
    if(numbers.indexOf(e.key) >= 0) {
        performCalculation(e.key);
    } else if(symbols.indexOf(e.key) >= 0) {
        changeOperator(e.key);
    } else {
        console.log(e.key);
    }
}

function callPerformCalculation() {
    performCalculation(this.innerText);
}

function callChangeOperator() {
    changeOperator(this.innerText);
}
