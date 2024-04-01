document.addEventListener('DOMContentLoaded', function () {
const currentYear = new Date().getFullYear();

const date = document.getElementById('date')
date.textContent = currentYear;


const tabsBox = document.querySelector(".tabs-box");
const tabsBoxButtons = document.querySelectorAll(".tabs-box .tab");
const arrowIcons = document.querySelectorAll(".icon img");

tabsBoxButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabsBoxButtons.forEach(btn => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none"; 
  arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 40);
  });
});

let isDragging = false;

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
  
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
document.addEventListener("touchend", dragStop);

});

// JavaScript
document.addEventListener('DOMContentLoaded', async function () {
  const toggle = document.getElementById('toggle');
  const arrowUp = document.getElementById('arrowUp');
  const arrowDown = document.getElementById('arrowDown');
  const locationName = document.getElementById('locationName');

  // Fetch location name from API
  // async function fetchLocationName() {
  //     try {
  //         const response = await fetch('your_api_endpoint_here');
  //         const data = await response.json();
  //         locationName.textContent = data.location; 
  //         // Assuming the API returns an object with a 'location' property
  //     } catch (error) {
  //         console.error('Error fetching location name:', error);
  //         locationName.textContent = 'Error loading location';
  //     }
  // }

  toggle.addEventListener('click', function () {
     
      arrowUp.classList.toggle('hidden');
      arrowDown.classList.toggle('hidden');
  });

  // Fetch location name when the page loads
  // await fetchLocationName();



  // Trending Product Slider-start
var TrendingSlider = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Trending Product Slider-end


});
