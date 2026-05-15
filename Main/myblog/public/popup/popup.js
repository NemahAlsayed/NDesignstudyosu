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

      fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNmI4MjRmY2U0OWE4ZWEzZWFhYzQ2YTMzMDE3ZmY4YWFhOTk1ZWUwNTRkNWY0ODQ5ZmMyYTI2N2NiNDBlM2VjZTE3ZjY4MjRiNmIzYjcxNmUiLCJpYXQiOjE3NzgyNDkyMjcuNzkyMjg3LCJuYmYiOjE3NzgyNDkyMjcuNzkyMjksImV4cCI6NDkzMzkyMjgyNy43ODQwMDUsInN1YiI6IjIzNDk0NDAiLCJzY29wZXMiOltdfQ.As6l7VLf6B3v50Br6NWp-GWS1mBYv_D0pful-vs8Ni827IpHAcWk9M-IT5V07yMLXOa-UeZ5_DkkWeFjVvMhOLXda5D7RxU6C9NlPrd-YROrRglvLj8PtSuZgpdjdmc7_AO6v8KJULeYskXj_5qjIe5SKjSAKplpE0iQXlzUldhwcT7FUsxt2lxSrtiaBI_VOjodhdUFAebGJkvlqaBEdfRgqlEHcRqgDSu8ikQXrElwT9Kuhmwyj1nvGLMDNeyxORqHKePwNq-VH2hAnkMqe3AjJ1VANnojSJvUY4Zbp5KrTUXgwF5aDYPkfdvWivFrnmZ4yvTyZwBVHduVN4a2pBuo4z3fhcB1lVXO0WH6G_9PvTw6m6pVni_8JgedCeegn4uonbRGPlxqf8wdNMkkCm-xXOgp3an5uJ-7t2KtKxgoJGIGUgX07KD16Z_IIeughjWB5in6_NpYvWHiajy03dCM-voAJ_GYaeGXGmGAuZZbV3XYALlTPsjWoQnygJCA19lciE4y52vj_PFRgaoxy9o1ElFmoh9OvLMFpfgIwGvB35C55tWDTXmP38ssT2iYYk0WYooP6nOrHdRhBmdDxmyYb0rmhtMRsfSuAAxSc5lQkYUuWL4P3XfqS_QCdWQjn9cz9V-1ft2O3d1FlDNOV8LJ_Dv-3A15GN2YHcxhpvE"
    },
    body: JSON.stringify({
        email: email,
        groups: ["186898983969359862"]
    })
})
.then(() => {
    // success actions
});


        alert("Check your inbox — your PDF guide is on the way!");
        popup.classList.remove("show");
    };
});
