const container20 = document.querySelector('.container20');
document.querySelector('.slider20').addEventListener('input', (e) => {
  container20.style.setProperty('--position', `${e.target.value}%`);
})

