// Theme Control

visibleArea = document.body;
visibleArea.classList.add("theme1");
chooseThemes = document.getElementById("themes-choice");

document.addEventListener('DOMContentLoaded', refreshTheme(), false);
chooseThemes.addEventListener('change', refreshTheme);

function refreshTheme() {
  visibleArea.removeAttribute("class");
  visibleArea.classList.add(`theme${chooseThemes.value}`);
}

// Calculator

// Get Elemets
// Get buttons
const keys = [["zero",0],["one",1],["two",2],["three",3],["four",4],["five",5],["six",6],["seven",7],["eight",8],["nine",9],["plus","+"],["minus","-"],["divide","/"],["multiply","*"],["decimal","."]]
// Get Display
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const result = document.getElementById("result");
const displayArea = document.getElementById("display-area");
let displayText = "";
let numArr = [];
let operatorArr = [];
let tempResult = 0;
let firstInput = true;

// Display inputs
for (let i = 0; i < keys.length; i++) {
  document.getElementById(keys[i][0]).addEventListener("click", () => {
    if (typeof keys[i][1] === 'number' || keys[i][1] === ".") {
      displayText += keys[i][1];
      displayArea.innerText = displayText;
    } else {
      if (displayText != "") {
        numArr.push(Number(displayText));
        console.log(`Pushing: ${displayText}`); 
      }
      
      
      operatorArr.push(keys[i][1]);

      displayText = "";
      displayArea.innerText = keys[i][1];
    }
  })
};

// Reset Calculation
reset.addEventListener("click", ()=> {
  console.log("----RESET----");
  numArr = [];
  operatorArr = [];
  tempResult = 0;
  displayText = "";
  displayArea.innerText = 0;
  firstInput = true
})

// Delete 
del.addEventListener("click",()=>{
  let len = displayText.length;
  
  if (len < 2) {
    displayArea.innerText = 0;
  }
  else {
    displayText = displayText.slice(0,len-1);
    displayArea.innerText = displayText;
  }
})

// Calculate
result.addEventListener("click",()=>{
  console.log(displayText);
  numArr.push(Number(displayText));
  console.log(`Pushing: ${displayText}`);    

  for (let i = 0; i < numArr.length; i++) {
    console.log(`Calculating: ${tempResult}, Calculation: ${operatorArr[0]}`);
    if (operatorArr[0] === "+") {
      tempResult += numArr[i];
      firstInput = false;
    } else if (operatorArr[0] === "-") {
      console.log(tempResult);
      if (firstInput) {
        tempResult += numArr[i];
        firstInput = false;
      } else {
        tempResult -= numArr[i];
      }
    } else if (operatorArr[0] === "*") {
      firstInput = false;
      if (i === 0) {
        if (tempResult > 0) {
          tempResult = numArr[i] * tempResult
        }
        continue
      } else if (i === 1) {
        tempResult = numArr[i] * numArr[i-1];
      } else {
        tempResult = numArr[i] * tempResult
      }
    } else if (operatorArr[0] === "/") {
      firstInput = false;
      if (i === 0) {
        if (tempResult > 0) {
          tempResult = tempResult / numArr[i];
        }
        continue
      } else if (i === 1) {
        tempResult = numArr[i-1] / numArr[i];
      } else {
        tempResult = tempResult / numArr[i];
      }
    }


    if (i > 1) {
      operatorArr.shift();
    }
  }
  numArr = [];
  operatorArr = [];
  displayText = "";
  displayArea.innerText = tempResult;
})

const calArea = document.getElementById("cal-area")
calArea.addEventListener("click",(e)=>{
  
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  console.log(`numArr: ${numArr}, operatorArr: ${operatorArr}, tempResult: ${tempResult}`);
  document.getElementById("audio").play();
  document.getElementById("audio").currentTime=0;

})
