// set init counter to 0
let count = 0;

// select value + buttons
const value = document.querySelector("#value"); // recall <span id="value">0</span> in index.html
const btns  = document.querySelectorAll(".btn"); // targeting ALL the btns

console.log(btns);
console.log(value);

btns.forEach(function (btn){
 // console.log(btn);// logs each value of our btns
 btn.addEventListener("click", function (e){
  // console.log(e.currentTarget.classList); // logging the event pointing to the curr target which is
  //the btn click event(s) + the classList(s) of such
  const styles = e.currentTarget.classList;

  // value based IF statments
  if (styles.contains("decrease")) {
   count--;// decrements our curr num count
  }
  else if(styles.contains("increase")) {
   count++;// incremnets our curr num count
  } else {
   count = 0;
  }

  // color.value IF statements
  if(count > 0) {
   value.style.color = "pink";// when val of `count` exceeds 0, val will display in pink 
  }
  if(count < 0) {
   value.style.color = "orange";// when val of `count` dwarfs 0, val will display in orange
  }
  if(count === 0) {
   value.style.color = "#222";// when val of `count` is 0, val will display in black
  }
  value.textContent = count;
 });
});



 



























