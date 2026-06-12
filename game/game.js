setTimeout(() => {
  // kamera zoom
  document.getElementById("room").style.transform = "scale(1.25)";

  // bildirim göster
  document.getElementById("notification").style.opacity = "1";
}, 2000);

setTimeout(() => {
  document.getElementById("notification").innerText = "Tap to open tablet";
}, 4000);
