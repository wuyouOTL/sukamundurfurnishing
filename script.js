const products = document.querySelectorAll('.pdlist');

products.forEach((product, index) => {
    const popupButton = product.querySelector(`#popupButton-${index + 1}`);
    const closePopup = product.querySelector(`#closePopup-${index + 1}`);
    const popup = product.querySelector(`#popupBox-${index + 1}`);

    popupButton.addEventListener(
        "click",
        function () {
            popup.classList.add("show");
        }
    );
    closePopup.addEventListener(
        "click",
        function () {
            popup.classList.remove("show");
        }
    );
    window.addEventListener(
        "click",
        function (event) {
            if (event.target == popup) {
                popup.classList.remove("show");
            }
        }
    );
});