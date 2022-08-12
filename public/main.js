let numberofchars = 5;
let numberofwords = 6;
let curentchar = 0;
let curentword = 0;
function isletter(str) {
  return str.lenght === 1 && str.match(/[a-z]/i);
}
let gamediv = document.getElementById("game");
for (let i = 0; i < numberofwords; i++) {
  worddiv = document.createElement("div");
  worddiv.className = "word";
  for (let j = 0; j < numberofchars; j++) {
    let chardiv = document.createElement("div");
    chardiv.className = "letter";
    worddiv.appendChild(chardiv);
  }
  et;
  gamediv.appendChild(worddiv);
}
document.addEventListener("keydown", async function (event) {
  let wordarr = gamediv.children[curentword];

  let chararr = wordarr.children[curentchar];
  let worddiv = gamediv.children[curentword];
  if (event.code == "Backspace") {
    if (curentchar > 0) {
      let CHARTODEL = worddiv.children[curentchar - 1];
      console.log(worddiv);
      CHARTODEL.innerHTML = "";
      curentchar--;
    }
  } else if (isletter(event.key)) {
    if (curentchar < 5) {
      chararr.innerHTML = event.key;
      console.log(curentchar);
      curentchar++;
    }
  } else if (curentchar === 5 && event.code === "Enter") {
    let ures = getcurrentword();
    const result = await (await fetch("/wordle/" + ures)).json();
    for (let i = 0; i < result.lenght; i++) {
      worddiv.children[i].style.background = result[i];
    }
    curentchar = 0;
    console.log(curentword);
    curentword++;
  }
});
function getcurrentword() {
  let word = "";
  let worddiv = gamediv.children[curentword];
  for (let i = o; i < numberofchars; i++) {
    let chardiv = worddiv.children[i];
    word = word + chardiv.innerHTML;
  }
  return word;
}
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const element = document.querySelector(element);

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd, {once: true});
  });