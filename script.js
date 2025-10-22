// ================== GLOBAL DATA ==================
let mainNav = document.querySelectorAll(".navbar ul li");
let sections = document.querySelectorAll("section");
let exploreBtn = document.querySelector(".button button");
let data = {};

fetch("data.json")
  .then((res) => res.json())
  .then((json) => {
    data = json;
    console.log("✅ Data loaded:", data);
  })
  .catch((err) => console.error("Error loading JSON:", err));
// ================== GLOBAL DATA ==================
//===================== EXPLORE BUTTON ============================
exploreBtn.addEventListener("click", () => {
  mainNav.forEach((el) => {
    el.classList.remove("active");
    mainNav[1].classList.add("active");
    sections.forEach((sec) => {
      sec.classList.remove("active");
      sections[1].classList.add("active");
    });
  });
});
//===================== EXPLORE BUTTON ============================
//===================== NAVBAR ============================
sections[0].classList.add("active");
mainNav.forEach((el, index) => {
  //======================
  el.addEventListener("click", () => {
    mainNav.forEach((el, index) => el.classList.remove("active"));
    sections.forEach((el, index) => el.classList.remove("active"));

    el.classList.add("active");
    sections[index].classList.add("active");
    //=======================
  });
});
// ================== NAVBAR ==================
// ================== DESTINATION ==================
let navbar = document.querySelectorAll(".navbar-plants ul li");
navbar.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    navbar.forEach((ele) => ele.classList.remove("active"));
    ele.classList.add("active");

    if (data.destinations) {
      destinations(data, index);
    }
  });
});

function destinations(data, index) {
  let Data = data.destinations[index];
  if (!Data) return;

  let image = document.querySelector(" img");
  let title = document.querySelector(".plant-info h1");
  let description = document.querySelector(".description");
  let distance = document.querySelector(".dist");
  let time = document.querySelector(".time");

  image.src = Data.images.png;
  title.textContent = Data.name;
  description.textContent = Data.description;
  distance.textContent = Data.distance;
  time.textContent = Data.travel;
}

// ================== CREW ==================
let bullets = document.querySelectorAll(".bolts span");
bullets.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    bullets.forEach((ele) => ele.classList.remove("active"));
    ele.classList.add("active");

    if (data.crew) {
      crew(data, index);
    }
  });
});

function crew(data, index) {
  let Data = data.crew[index];
  if (!Data) return;

  let crewImage = document.querySelector(".crew-image img");
  let name = document.querySelector(".name");
  let rank = document.querySelector(".rank");
  let title = document.querySelector(".title");

  crewImage.src = Data.images.png;
  name.textContent = Data.name;
  title.textContent = Data.bio;
  rank.textContent = Data.role;
}
// ================== CREW ==================
// ================== TECHNOLOGY ==================
let nums = document.querySelectorAll(".content-technology > div > div span");
nums.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    nums.forEach((ele) => ele.classList.remove("active"));
    ele.classList.add("active");

    if (data.technology) {
      technology(data, index);
    }
  });
});

function technology(data, index) {
  let Data = data.technology[index];
  if (!Data) return;
  let technologyImage = document.querySelector(".technology-img img");
  let name = document.querySelector(".technology-name");
  let description = document.querySelector(".technology-info");

  technologyImage.src = Data.images.portrait;
  name.textContent = Data.name;
  description.textContent = Data.description;
}
// ================== TECHNOLOGY ==================

let burgerIcons = document.getElementById("menu-icon");
let nav = document.querySelector(".navbar");
burgerIcons.addEventListener("click", () => {
  if (burgerIcons.classList.contains("fa-bars")) {
    burgerIcons.classList.remove("fa-bars");
    burgerIcons.classList.add("fa-xmark");
    nav.style.display = "block";
  } else {
    burgerIcons.classList.remove("fa-xmark");
    burgerIcons.classList.add("fa-bars");
    nav.style.display = "none";
  }
});
