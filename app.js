let binaryN = document.getElementById("binary");
let result = document.querySelector(".result");
let button = document.querySelector(".btn");

let convertBtoD = () => {
  let bi = binaryN.value;
  if (bi.match(/^[0-1]+$/)) {
    let dec = parseInt(bi, 2);
    result.textContent = dec;
  } else {
    result.textContent = "Enter correct binary number";
  }
  return;
};
let hello = () => {
  console.log("clicked");
};
button.addEventListener("click", convertBtoD);
