
var result = document.querySelector('#resultfield');
var input= document.querySelector('#inputfield');
var inUnit = document.querySelector('#in-unit');
var outUnit = document.querySelector('#out-unit');


input.addEventListener('input', changeUnit);
inUnit.addEventListener('change', changeUnit);
outUnit.addEventListener('change', changeUnit);
console.log('input.value');

function changeUnit(){
if(!input.value.isNaN){
    displayNumber();}
else {
    displayError();
}
};

function displayNumber(){
result.textContent = input.value * inUnit.value / outUnit.value;
};

function displayError(){
result.textContent = 'wpisz liczbę';
};
