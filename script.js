document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleMode");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleButton.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
});