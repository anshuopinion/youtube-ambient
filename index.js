const canvas = document.getElementById("blurVideo");
const ctx = canvas.getContext("2d");
const video = document.getElementById("mainVideo");

setCanvasDimension();

video.addEventListener("play", () => {
  (function loop() {
    if (!video.paused && !video.ended) {
      paintOnCanvas();
      setTimeout(loop, 1000 / 30);
      console.log("hi");
    }
  })();
});
video.addEventListener("seeked", () => {
  paintOnCanvas();
});

function setCanvasDimension() {
  canvas.height = video.offsetWidth;
  canvas.width = video.offsetHeight;
}

function paintOnCanvas() {
  ctx.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
}
