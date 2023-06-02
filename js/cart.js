document.addEventListener("DOMContentLoaded", function() {
    var featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(function(card) {
        var addToCartBtn = card.querySelector(".add-to-cart-btn");

        card.addEventListener("mouseenter", function() {
            addToCartBtn.style.opacity = 1;
        });

        card.addEventListener("mouseleave", function() {
            addToCartBtn.style.opacity = 0;
        });
    });
});