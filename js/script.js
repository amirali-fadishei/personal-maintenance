const countDownDate = Date.UTC(2025, 8, 17, 18, 0, 0);

const Timer = setInterval(() => {
  const now = Date.now();
  const distance = countDownDate - now;

  if (distance <= 0) {
    clearInterval(Timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").textContent = days;
  document.querySelector("#hours").textContent = String(hours).padStart(2, '0');
  document.querySelector("#minutes").textContent = String(minutes).padStart(2, '0');
  document.querySelector("#seconds").textContent = String(seconds).padStart(2, '0');

}, 1000);
