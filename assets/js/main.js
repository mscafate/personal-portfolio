/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== FAST-TRACK REQUIREMENTS ===============*/
function getUser() {
  fetch("https://api.GitHub.com/users/mscafate", {
    method: "GET",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(
      (data) => {
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("bio").innerText = data.bio;
        if (data.hireable) {
          document.getElementById("hireable").innerText += "Hireable";
        } else {
          document.getElementById("hireable").innerText += data.hireable;
        }
      }
      //console.log(data.avatar_url)
    );
  //document.getElementById("avatar").src = data.avatar_url;
}
window.onload = function () {
  getUser();
};
