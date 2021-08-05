const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");

const text = document.querySelector("#text");
const original = text.innerHTML;
var word = [];

btn_toggle.onclick = () => {
  // your code here
  if(btn_toggle.innerText == "Display Calculation"){
    btn_toggle.innerText = "Display Author";
    let code = 630610722;
    let plus = length.value;
    let sum = code+plus;
    author.innerText = sum;
  }else{
    btn_toggle.innerText = "Display Calculation";
    author.innerText = "630610722 JONGKONRAT PISITNAWAKUN";
  }
}

// more codes for Search and Reset buttons here
btn_reset.onclick = () => {
  length.value = 5;
  color.value = "#ff0000";
  text.innerHTML = original;
}

btn_search.onclick = () => {
  text.innerHTML = original;
  word = original.split(" ")
  var sreach = " "
  for(let i=0; i<word.length; i++){
    if(word[i].length > length.value){
      search += "<span style = 'background-color: " + color.value +"' >" +word[i] + "</span>" + " "
    }else{
      sreach += word[i]+" "
    }
  }
  text.innerHTML = search;
}