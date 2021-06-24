const loader = document.querySelector('.loader');
const wrapper = document.querySelector('.wrapper');

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    wrapper.style.display = 'block';
    setTimeout(() => (wrapper.style.opacity = 1), 50);
  }, 1700);
}

init();
