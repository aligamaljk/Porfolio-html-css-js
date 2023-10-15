//up Down
//up
let up = document.getElementById("up");
//Down
let down = document.getElementById("down");
window.onscroll = () => {
  if (window.scrollY >= 500) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
down.onclick = () => {
  // console.log("down button");
  window.scrollBy(0, 1000000);
};

//up Down

// num And Stop

let parspan = document.getElementById("parspan");
let span = document.getElementById("span");
let tap = document.getElementById("tap");
parspan.onclick = () => {
  if (span.style.width === "100%") {
    span.style.width = "60%";
  } else {
    span.style.width = "100%";
  }
  tap.classList.toggle("event");
};

let btn = document.querySelector("#stop");
let div = document.querySelector("#num");

function countdown() {
  div.innerHTML -= 1;
  if (+div.innerHTML === 0) {
    clearInterval(counter);
  }
}
let stop = (btn.onclick = () => {
  clearInterval(counter);
  console.log(div.innerHTML);
});
let counter = setInterval(countdown, 1000);

// num And Stop

// scroller-Top
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log( "scrollHeight" ,document.documentElement.scrollHeight);
// console.log("clientHeight",document.documentElement.clientHeight);
// console.log("height",height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  console.log( "scrollTop", scrollTop);
  el.style.width = `${(scrollTop / height) * 100}%`;
});
