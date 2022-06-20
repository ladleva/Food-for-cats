const allCards = document.querySelectorAll(".product__active");
const clickClass = "clicked";

[...allCards].forEach(function(main) {
    const card = main.querySelector(".product__item");
    const btn = main.querySelector(".item__link");

    function change() {
        if (main.classList.contains(clickClass)) {
            main.classList.remove(clickClass);
        } else {
            main.classList.add(clickClass);
        }
    };
    card.addEventListener("click", change);
    btn.addEventListener("click", change);
});
