
function toggleText(id) {
    var text = document.getElementById(id);
    if (text.style.display === "none") {
        text.style.display = "block"; // Показати текст
    } else {
        text.style.display = "none"; // Приховати текст
    }
}
