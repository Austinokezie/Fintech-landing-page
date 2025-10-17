 const menu = document.querySelector('.links');
const openBtn = document.getElementById('fa-bars');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('active');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('active');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
