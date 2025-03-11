const form = document.querySelector("form");
const root = document.documentElement;

// Function to get a cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Retrieve saved font size and color from cookies
const savedFontSize = getCookie("fontsize");
const savedFontColor = getCookie("fontcolor");

if (savedFontSize) {
    root.style.setProperty("--fontsize", savedFontSize);
    document.getElementById("fontsize").value = parseInt(savedFontSize);
}

if (savedFontColor) {
    root.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;

    // Store values in cookies for 30 days
    document.cookie = `fontsize=${fontSize}; path=/; max-age=${30 * 24 * 60 * 60}`;
    document.cookie = `fontcolor=${fontColor}; path=/; max-age=${30 * 24 * 60 * 60}`;

    // Apply changes to CSS variables
    root.style.setProperty("--fontsize", fontSize);
    root.style.setProperty("--fontcolor", fontColor);
});
