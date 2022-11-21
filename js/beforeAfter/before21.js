const container21 = document.querySelector('.container21');
document.querySelector('.slider21').addEventListener('input', (e) => {
  container21.style.setProperty('--position', `${e.target.value}%`);
})

