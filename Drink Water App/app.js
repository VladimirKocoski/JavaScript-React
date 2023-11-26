const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const procenti = document.querySelector("#procenti");
const remained = document.querySelector("#remained");

updatebigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updatebigCup();
}

function updatebigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    procenti.style.visibility = "hidden";
    procenti.style.height = 0;
  } else {
    procenti.style.visibility = "visible";
    procenti.style.height = `${(fullCups / totalCups) * 330}px`;
    procenti.innerHTML = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}`;
  }
}
