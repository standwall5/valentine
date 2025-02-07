const letterButton = document.getElementById("letter");
const welcome = document.getElementById("welcome");
const message = document.getElementById("message");
const contentMessage = document.getElementById("contentMessage");
const heart = document.getElementById("heart");
const ily = document.getElementById("ily");

ily.classList.toggle("fade");

letterButton.addEventListener("click", () => {
  welcome.classList.toggle("fade");
  message.classList.toggle("fade");
  contentMessage.classList.toggle("extend");

  setTimeout(() => {
    display(welcome);
  }, 1000);
});

function display(element) {
  element.style.display = "none";
}

const no = document.getElementById("no");
const yes = document.getElementById("yes");
let v = 0;

// no functionality
no.addEventListener("click", () => {
  v = 1;
  no.style.position = "absolute";
  let k = 0;
  let counter = 0;
  let i = Math.abs(Math.floor(Math.random() * window.innerWidth - 55 * 2));
  let j = Math.abs(Math.floor(Math.random() * window.innerHeight - 21 * 2));
  console.log("here", i, j, no.style.left, no.style.top);
  no.style.left = i + "px";
  no.style.top = j + "px";
  //   k += 2;
  //   yes.style.width = "auto";
  yes.style.position = "absolute";

  //   yes.style.fontSize = k + "rem";
  console.log(v);

  no.addEventListener("mouseover", () => {
    if (v == 1) {
      let i = Math.abs(Math.floor(Math.random() * window.innerWidth - 55 * 2));
      let j = Math.abs(Math.floor(Math.random() * window.innerHeight - 21 * 2));
      console.log("here", i, j, no.style.left, no.style.top);
      no.style.left = i + "px";
      no.style.top = j + "px";
      counter += 1;
      if (counter > 8) {
        k += 10;
        yes.style.width = "auto";

        yes.style.fontSize = k + "rem";
      } else if (counter > 2) {
        k += 2;
        yes.style.width = "auto";

        yes.style.fontSize = k + "rem";
      }
    }
  });
});

// yes functionality

yes.addEventListener("click", () => {
  message.classList.toggle("fade");
  contentMessage.classList.toggle("extend");
  ily.classList.toggle("fade");
  setInterval(createHeart, 300);
  setTimeout(() => {
    display(message);
  }, 2000);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.id = "heart";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerHTML = '<img src="res/img/heartpixel.png">';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
