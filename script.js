(function () {
  const page = document.getElementById("misnotation-title");
  const button = document.getElementById("startBtn");
  const iframe = document.getElementById("live-doc-frame");

  // 📖 Page turn animation
  const turnPage = () => {
    page.style.transform = "rotateY(-100deg)";
    page.style.boxShadow = "0 0 80px rgba(0,0,0,0.6)";
    setTimeout(() => page.remove(), 1200);
  };

  button.addEventListener("click", turnPage);

  // 🔄 Auto-refresh every 2 seconds (UNCHANGED behavior)
  setInterval(() => {
    iframe.src = iframe.src.split("?")[0] + "?t=" + Date.now();
  }, 2000);

  console.log("Welcome to the Misnotation Dihtionary.");
})();


