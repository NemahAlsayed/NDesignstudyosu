document.addEventListener("DOMContentLoaded", function () {
    const popup = document.createElement("div");
    popup.id = "email-popup";
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Unlock Your Free L’Occitane Beauty Guide</h2>
            <p>Enter your email to instantly download the exclusive PDF — packed with expert tips, product secrets, and routines you can start today.</p>
            <input type="email" id="popup-email" placeholder="Your email">
            <button id="popup-submit">Get My Free Guide</button>
            <a id="popup-skip" class="skip-link">No thanks, continue reading</a>
            <span id="popup-close">×</span>
        </div>
    `;
    document.body.appendChild(popup);

    let popupShown = false;

    // Show popup when user scrolls 50%
    window.addEventListener("scroll", () => {
        if (popupShown) return;

        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        if (scrollPercent >= 0.5) {
            popup.classList.add("show");
            popupShown = true;
        }
    });

    // Close button
    document.getElementById("popup-close").onclick = () =>
        popup.classList.remove("show");

    // Skip link
    document.getElementById("popup-skip").onclick = () =>
        popup.classList.remove("show");

    // Submit
    document.getElementById("popup-submit").onclick = () => {
        const email = document.getElementById("popup-email").value;
        if (!email.includes("@")) return alert("Enter a valid email");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: "aecf5170-80f0-4c48-8e28-71d5f1dfc993",
                email: email,
                group: "Loccitane PDF Leads",
                subject: "L'Occitane PDF Guide Request",
                message: "User requested the L'Occitane PDF guide."
            })
        });

        alert("Check your inbox — your PDF guide is on the way!");
        popup.classList.remove("show");
    };
});
