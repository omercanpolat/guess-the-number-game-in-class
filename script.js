let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let attempt = 0;
let score = 5;
const tahmin = document.querySelector(".tahmin");
const displayMassage = function (tahmin) {
  document.querySelector(".tahmin").textContent = tahmin;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess < 1 || guess > 100) {
    alert("1-100 arasında bir sayi giriniz");
  } else if (!guess) {
    displayMassage("Lütfen tahminde bulununuz");
  } else if (guess === secretNumber) {
    displayMassage("Tebrikler");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(
        guess > secretNumber
          ? "Düsük bir tahminde bulununuz"
          : "büyük bir tahminde bulununuz"
      );
      attempt++;
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".attempt").textContent = attempt;
      if (attempt === 4) {
        document.querySelector(".last").classList.remove("hidden");
      }
    } else {
      displayMassage("Kaybettiniz");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".attempt").textContent = 5;
      document.querySelector(".last").classList.add("hidden");
      document.querySelector(".check").disabled = true;
      document.querySelector(".again").classList.toggle("hidden");
      document.querySelector(".again").addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
});
