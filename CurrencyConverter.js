
var requestURL = 'https://api.exchangerate.host/latest'; 
var request = new XMLHttpRequest(); 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let htmll = '';

request.onload = function() {
  var response = request.response;
  console.log(response);
}

async function currency(){
  const select = document.querySelectorAll('select');
  const input = document.querySelectorAll('input');
  const res = await fetch(requestURL);
  const data = await res.json();
  var selObj = document.getElementById("banii");
  var selObj1 = document.getElementById("convertiree");
  //var selValue = selObj.options[selObj.selectedIndex].text;
 //var selValue1 = selObj1.options[selObj1.selectedIndex].text;
  const ratess = data.rates;
  //console.log(ratess);
  const arrKeys = Object.keys(data.rates);
  //console.log(arrKeys);
  arrKeys.map(item => {
     return htmll += `<option value=${item}>${item}</option>`;
});
//console.log(htmll);
for(let i=0; i<select.length; i++){
  select[i].innerHTML = htmll;
}

}

async function convertiree(){
  const select = document.querySelectorAll('select');
  const input = document.querySelectorAll('input');
  const res = await fetch(requestURL);
  const data = await res.json();
  const ratess = data.rates;
  let introdus = document.getElementById("introducere");
  introdus.addEventListener('keyup', ()=>{
    document.getElementById("Conversie").innerText = introdus.value * ratess[select[1].value] / ratess[select[0].value];
  });
  document.getElementById("Conversie").innerText = introdus.value * ratess[select[1].value] / ratess[select[0].value];
}
function convertire()
{
  currency()
    var selObj = document.getElementById("banii");
    var selObj1 = document.getElementById("convertiree");
   // var selValue = selObj.options[selObj.selectedIndex].text;
   // var selValue1 = selObj1.options[selObj1.selectedIndex].text;
    let s = document.getElementById("introducere").value;

   // if(selValue == "EUR" && selValue1 == "RON"){
   //     let SumaConvertita = s * 4.93 ;
   //     document.getElementById("Conversie").innerText = SumaConvertita ;
   // }
}
