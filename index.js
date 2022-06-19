const allCards = document.querySelectorAll(".product__active");
const clickClass = "clicked";

[...allCards].forEach(function(main) {
    const card = main.querySelector(".product__item");
    const btn = main.querySelector(".item__link");
    card.addEventListener("click", function() {
        if (main.classList.contains(clickClass)) {
            main.classList.remove(clickClass);
        } else {
            main.classList.add(clickClass);
        }
    });
    btn.addEventListener("click", function() {
        if (main.classList.contains(clickClass)) {
            main.classList.remove(clickClass);
        } else {
            main.classList.add(clickClass);
        }
    });
});