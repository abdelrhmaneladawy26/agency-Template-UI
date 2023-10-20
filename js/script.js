// Check if main-color
let mainColor = localStorage.getItem("option-color");
let darkMode = localStorage.getItem("darkMode");
if (darkMode === "on") {
  document.body.style.backgroundColor = "#333";
  document.querySelector("#on").classList.add("active");
} else {
  document.querySelector("#off").classList.add("active");
}
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".list-colors li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === mainColor) {
      e.classList.add("active");
    }
  });
}
//  chiek if main-font
let mainFont = localStorage.getItem("option-font");
if (mainFont !== null) {
  document.documentElement.style.setProperty("--main-size", mainFont);
  document.querySelectorAll(".list-font li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.size === mainFont) {
      e.classList.add("active");
    }
  });
}
// check if bullets
let settingBullets = document.querySelectorAll(
  ".setting-bullets .buttons button"
);
let optionBullets = localStorage.getItem("option-bullets");
if (optionBullets !== null) {
  document.querySelector(".nav-bullets").style.display = "block";
}

if (optionBullets === "block") {
  document.querySelector(".nav-bullets").style.display = "block";
} else {
  document.querySelector(".nav-bullets").style.display = "none";
}
// setting box
let setting = document.querySelector(".setting-box");
let btnSetting = document.querySelector(".setting-box .icon i");
btnSetting.addEventListener("click", function () {
  setting.classList.toggle("open");
  btnSetting.classList.toggle("fa-spin");
});
//------------------------------------
let btnDark = document.querySelectorAll(".buttons button");
btnDark.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.dataset.dark === "on") {
      document.body.style.backgroundColor = "#333";
    } else if (e.target.dataset.dark === "off") {
      document.body.style.backgroundColor = "#fff";
    }
    localStorage.setItem("darkMode", e.target.dataset.dark);
  });
});

// -------------------------------------------
// setting colors
let colorList = document.querySelectorAll(".list-colors li");
colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("option-color", e.target.dataset.color);
    window.location.reload();
    e.target.parentElement.querySelectorAll(".active").forEach(active(e));
  });
});
// Setting Font size
let fontList = document.querySelectorAll(".list-font li");
fontList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-size",
      e.target.dataset.size
    );
    localStorage.setItem("option-font", e.target.dataset.size);
    active(e);
  });
});
// Active State
function active(e) {
  e.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  e.target.classList.add("active");
}
// -------------------------------------------
// Landing Page
let landing = document.querySelector(".landing");
let imageArray = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"];
setInterval(() => {
  let randomNum = Math.floor(Math.random() * imageArray.length);
  landing.style.backgroundImage = `url(images/landing/${imageArray[randomNum]})`;
}, 3500);
// -------------------------------------------
// about image color
let aboutImg = document.querySelector(".about-img img");
if (mainColor === "rgb(114, 209, 114)") {
  aboutImg.setAttribute("src", "../images/about/01.png");
} else if (mainColor === "#E91E63") {
  aboutImg.setAttribute("src", "../images/about/02.png");
} else if (mainColor === "#009688") {
  aboutImg.setAttribute("src", "../images/about/03.png");
}
// Nav Bullets
let bullets = document.querySelectorAll(".nav-bullets .bullet");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// -----------------------------------
settingBullets.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.dataset.bullet === "yes") {
      document.querySelector(".nav-bullets").style.display = "block";
      localStorage.setItem("option-bullets", "block");
    } else {
      document.querySelector(".nav-bullets").style.display = "none";
      localStorage.setItem("option-bullets", "none");
    }
    active(e);
  });
});
