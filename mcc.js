// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }

// function openTab(tabName) {
//     var i, tabContent, tabButtons;
//     tabContent = document.getElementsByClassName("tab");
//     for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].classList.remove("active");
//     }
//     document.getElementById(tabName).classList.add("active");
//     tabButtons = document.getElementsByClassName("tab-button");
//     for (i = 0; i < tabButtons.length; i++) {
//         tabButtons[i].classList.remove("active");
//     }
//     document.querySelector(".tab-button[data-tab='" + tabName + "']").classList.add("active");
// }


// javaScript for google review section


// function getRandomLightColor() {
//     const base = 180; 
//     const randomComponent = () => Math.floor(Math.random() * (255 - base) + base);
//     const r = randomComponent();
//     const g = randomComponent();
//     const b = randomComponent();
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function setRandomBackgroundColors() {
//     const images = document.querySelectorAll('.carousel .list .item img');
//     images.forEach(img => {
//         img.style.backgroundColor = getRandomLightColor();
//     });
// }

// window.onload=setRandomBackgroundColors();

// function setGradientBackgrounds() {
//     const images = document.querySelectorAll('.carousel .list .item img');
//     images.forEach(img => {
//         img.style.backgroundImage = 'linear-gradient(to bottom right, #E0F2F1, #B9FBC0)'; // Light green and white gradient
//     });
// }




// let cards = document.querySelectorAll(".card");

// for (let card of cards) {
//   card.addEventListener("click", () => {
//     setCardWidth(card);
    
//     let active = document.querySelector(".active");
//     if (active && active !== card) active.classList.toggle("active");
//     card.classList.toggle("active");
    
//   });
// }


// function setCardWidth(card) {
//     let img = card.querySelector("img");
//     let baseWidth = img.offsetWidth;
//     let offset = Math.tan((10 * Math.PI) / 180) * img.offsetHeight;
//     let percentage = baseWidth / (baseWidth + offset) - .02;
//     console.log("Percentage", percentage);
//     let width = baseWidth * percentage;
//     card.style.setProperty("--active-width", `${width}px`);
// }



// JS for Navbar
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("header");
  let logo = document.querySelector(".logo-container img"); 
  let whiteSection = document.querySelector(".advantage"); 
  let dropdownLinks = document.querySelectorAll(".dropdown-link a");

  if (whiteSection) {
    let whiteSectionTop = whiteSection.offsetTop;
    let scrollPosition = window.scrollY;

    if (scrollPosition >= whiteSectionTop - 50) { 
      navbar.classList.add("white-navbar");
      logo.src = "assests/logos/MCC logo.svg";
    } else {
      navbar.classList.remove("white-navbar");
      logo.src = "assests/logos/MCC White Logo.svg";
    }
  }
});





document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".alumini .card");
  
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        if (card.classList.contains("active")) {
          card.classList.remove("active");
        } else {
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
        }
      });
    });
  });



  const steps = document.querySelectorAll(".step");

  const animate = () => {
    let index = 0;
    
    setInterval(() => {
      steps.forEach((step, i) => {
        if (i <= index) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
  
      index++;
      if (index >= steps.length) {
        index = -1; // Loop ko continuous banane ke liye index reset karenge
      }
    }, 1000);
  };
  
  window.onload = animate;
  
