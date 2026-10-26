const envelope = document.querySelector("#envelope");
const starsContainer = document.querySelector(".stars");
let opened = false;

function createStars(amount = 100) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--size", `${Math.random() * 2 + 1}px`);
    star.style.setProperty("--opacity", `${Math.random() * 0.65 + 0.25}`);
    star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
    star.style.setProperty("--delay", `${Math.random() * 4}s`);
    fragment.appendChild(star);
  }
  starsContainer.appendChild(fragment);
}

function openLetter() {
  if (opened) return;
  opened = true;
  envelope.classList.add("opening");
  envelope.setAttribute("aria-label", "Abrindo o bilhete");
  window.setTimeout(() => {
    document.body.classList.add("opened");
    envelope.setAttribute("aria-label", "Bilhete aberto");
    document.querySelector("#memories").setAttribute("aria-hidden", "false");
  }, 650);
}

createStars();
envelope.addEventListener("click", openLetter);
