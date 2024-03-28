document.addEventListener('DOMContentLoaded', function(){
const currentYear = new Date().getFullYear();

const date = document.getElementById('date')
date.textContent = currentYear;
})

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