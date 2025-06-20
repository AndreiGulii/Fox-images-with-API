const btnNext = document.querySelector("#btn-next");
const foxImg = document.querySelector("#fox-img");

function getFox() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxImg.src = data.image;
    });
}

getFox();

btnNext.addEventListener("click", getFox);
