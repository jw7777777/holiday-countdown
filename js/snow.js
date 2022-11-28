
/* source: https://reactgo.com/css-snow-animation/ */

const flake = document.querySelector(".flake");
const container = document.querySelector(".container");

function createFlake() {
  const clone = flake.cloneNode(true);
  clone.style.paddingLeft = Math.random() * 10 + "px"; // creating left padding
  clone.style.animationDuration = Math.random() * 5 + 3 + "s"; // animation duration between 3-5
  clone.style.opacity = Math.random() * 1;
  container.append(clone); // adding clone flake to container
}
const s = setInterval(createFlake, 100); // to create more flakes decrease 100

setTimeout(() => {
  clearInterval(s);
}, 3000); // flake creation stops after 3000 milliseconds or 3s

// to add random colors add this code to createFlake method

/* 
 const randomC = Math.random() * 200;
 const randomA = Math.random() * 200;
 const randomB = Math.random() * 56;
 clone.style.color = `rgb(${randomA + 256},${randomB + 200},${randomC + 100})`;

*/



