const sections = document.querySelectorAll("section");
const audio = document.querySelector("#Festejo");
const playPauseBtn = document.querySelector("#playPauseBtn");
const progressBar = document.querySelector("#progressBar");

const observe = new IntersectionObserver((entries, observe) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observe.unobserve(entry.target)
    }
  })
  {
     threshold: 0.5
 }
});



sections.forEach(section => {
observe.observe(section)
});

audio.addEventListener("timeupdate", updateProgressBar); 
playPauseBtn.addEventListener("click", togglePlayPause);
progressBar.addEventListener("input", seekAudio);

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
}

function seekAudio() {
  const seekTo = (progressBar.value / 100) * audio.duration;

  if (seekTo) {
  audio.currentTime = seekTo;
  }

}

