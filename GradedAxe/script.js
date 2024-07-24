// script.js

function redirectToUrl(select) {
    var selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
