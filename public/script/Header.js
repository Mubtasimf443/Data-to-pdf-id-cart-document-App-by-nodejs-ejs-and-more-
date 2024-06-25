


const toggleBtn = document.querySelector('.toggle-btn');
const cencel_btn = document.querySelector('.cencel-Btn');

const bar = document.querySelector('#bar');


toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
 bar.classList.toggle("active");
});

cencel_btn.addEventListener('click', (e) => {
  e.preventDefault();
  bar.classList.toggle('active');
});




