---
title: "Portföy - N Design Studio Çalışmaları"
date: 2026-06-02T00:00:00+03:00
draft: false
description: "N Design Studio'nun tasarım ve görsel kimlik alanındaki en son çalışmalarını inceleyin"
tags: ["Tasarım", "Portföy", "Çalışmalar"]
categories: ["İşler"]
translationKey: "portfolio-page"
---

{{< rawhtml >}}
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<style>
/* RESET */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* GLOBAL */
.portfolio-page {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(145deg, #faf6ef 0%, #f5ede0 100%);
    padding: 2rem 1rem;
    line-height: 1.7;
    color: #4a3724;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.portfolio-card {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 48px;
    overflow: hidden;
    box-shadow: 0 35px 50px -25px rgba(0, 0, 0, 0.2);
}

/* HERO */
.hero-portfolio {
    background: linear-gradient(135deg, #f3e5c9 0%, #e8d5b5 50%, #dcc49a 100%);
    padding: 2.8rem 2rem;
    text-align: center;
    border-bottom: 3px solid #b8860b;
    animation: softGlow 3s infinite alternate;
}
@keyframes softGlow {
    0% { background: linear-gradient(135deg, #f3e5c9, #e8d5b5, #dcc49a); }
    100% { background: linear-gradient(135deg, #f7efdf, #ede1c6, #e0cdad); }
}

.hero-portfolio h1 {
    font-size: 2.8rem;
    color: #5c3b1f;
    margin-bottom: 0.5rem;
    animation: fadeSlideUp 0.8s ease-out;
}
@keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero-portfolio p {
    color: #7a552e;
    font-size: 1.1rem;
}

/* COMING SOON CARD */
.coming-soon-container {
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
}

.coming-soon-card {
    background: linear-gradient(135deg, #fffef8, #fef9f0);
    border-radius: 40px;
    padding: 3rem 2rem;
    text-align: center;
    max-width: 500px;
    width: 100%;
    border: 2px solid rgba(184, 134, 11, 0.2);
    box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    animation: cardPulse 2s infinite;
}
.coming-soon-card:hover {
    transform: scale(1.02);
    border-color: rgba(184, 134, 11, 0.5);
    box-shadow: 0 30px 50px -18px rgba(0, 0, 0, 0.2);
}

@keyframes cardPulse {
    0% { box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 25px 45px -10px rgba(184, 134, 11, 0.2); }
    100% { box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.1); }
}

.coming-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: iconBounce 1.5s ease infinite;
}
@keyframes iconBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.coming-soon-card h2 {
    font-size: 2rem;
    color: #5c3b1f;
    margin-bottom: 1rem;
}

.coming-badge {
    display: inline-block;
    background: #b8860b;
    color: #fffef8;
    padding: 0.4rem 1.2rem;
    border-radius: 40px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 1rem 0;
}

.coming-soon-card p {
    color: #7a552e;
    margin-top: 1rem;
    font-size: 0.95rem;
}

.decorative-line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #b8860b, transparent);
    margin: 1rem auto;
}

/* SPARKLES */
.sparkle {
    display: inline-block;
    animation: sparkle 1s ease infinite;
}
@keyframes sparkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
}

/* FOOTER */
.footer-note {
    background: #2c241a;
    color: #ddcfb2;
    text-align: center;
    padding: 1rem;
    font-size: 0.7rem;
}
</style>
</head>

<body>
<div class="portfolio-page">
<div class="portfolio-card">

<!-- HERO -->
<div class="hero-portfolio">
    <h1>📂 Portföyümüz</h1>
    <p>Hassasiyet ve yaratıcılıkla güzellik yaratıyoruz</p>
</div>

<!-- COMING SOON CARD -->
<div class="coming-soon-container">
    <div class="coming-soon-card">
        <div class="coming-icon">✨🎨✨</div>
        <div class="coming-badge">ÇOK YAKINDA</div>
        <h2>Portföy Sergisi<span class="sparkle">🌟</span></h2>
        <div class="decorative-line"></div>
        <p>
            En yeni ve en güzel çalışmalarımızı özel bir galeride sizlere sunmak için şu anda özenle seçiyoruz.
        </p>
        <p style="font-size:0.85rem; margin-top:0.5rem;">
            Yakında tasarım, marka kimliği ve kullanıcı deneyimi alanlarındaki projelerimizi keşfedebileceksiniz.
        </p>
    </div>
</div>

<!-- FOOTER -->
<div class="footer-note">
    <p>N Design Studio - Portföy Çok Yakında</p>
</div>

</div>
</div>
</body>
</html>
{{< /rawhtml >}}