  const menu = document.querySelector('.links');
  const openBtn = document.querySelector('#fa-bars');
  const closeBtn = document.querySelector('#close');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active');
  });