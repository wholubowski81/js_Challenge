
var button = document.getElementById('button');
button.addEventListener('click', startApp);

var j=0, sqrt = 0;
var arr = [''], str = '';

function startApp() {
  const x = getNumber();


  if (isValid(x)) {
    displayResult();
    return;
  }

  const result = computePrimeNumber(x);
  displayResult();
}


function getNumber(){
        x = document.getElementById('numberfield').value;
        return x;
        }

function displayResult(){
        if(result === -1){
                document.getElementById("resultfield").style.color="#ff0000";
                document.getElementById("resultfield").textContent="BŁĄD WPISZ PRAWIDŁOWĄ WARTOŚĆ Z ZAKRESU 0 - 10.000";
        }
        else if(result === 0) {
                document.getElementById("resultfield").textContent="BRAK LICZB PIERWSZYCH";
        }
        else{
                document.getElementById("resultfield").style.color="#00c000";
                document.getElementById("resultfield").textContent="Liczby pierwsze z podanego zakresu: "+str;
        }
  }

function isValid(x){
    if (x<0 || x>10000 || x.isNaN){
    return result = -1;
    }
}

function computePrimeNumber(x){

sqrt = Math.sqrt(x);
    if(x>=0 && x <3){
        return result = 0;
    }
    else {
        for(i = 2; i <= x; i++) {arr[i] = true;}

        for(i = 2; i <= sqrt; i++)
        {

            if(arr[i] == true){
                for(j = i * i; j < x; j += i){
                    arr[j] = false;
                }
            }
        }
        }

for(i = 2; i < x; i++){
      if(arr[i] == true){
        str += i + ', ';
        }
}
return result=2;
}
