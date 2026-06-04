document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;
    let errorMsg = document.getElementById('error-msg');

    // የስምና የይለፍ ቃል ፍተሻ
    if (usernameInput === "admin" && passwordInput === "ambo2026") {
        // መረጃው ልክ ከሆነ አስተዳዳሪውን ወደ admin.html ያሻግረዋል
        window.location.href = "admin.html";
    } else {
        // የተሳሳተ ከሆነ ቀዩን የስህተት መልዕክት ያሳያል
        errorMsg.style.display = "block";
    }
});
