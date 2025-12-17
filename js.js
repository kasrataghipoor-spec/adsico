document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const bgwave = document.querySelector('.bgwave');
    const serviceCards = document.querySelectorAll('.service-card');

    // رنگ‌های تم
    const colors = {
        yellow: '#ffff00',
        green: '#1a9b74',
        blue: '#0000ff'
    };

    // بارگذاری تم ذخیره‌شده
    const savedTheme = localStorage.getItem('siteTheme') || 'green';
    applyTheme(savedTheme);

    // رویداد کلیک دکمه‌ها
    themeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            localStorage.setItem('siteTheme', color);
            applyTheme(color);
        });
    });

    // تابع اعمال تم
    function applyTheme(color) {
        const themeColor = colors[color];
        bgwave.style.fill = themeColor;
        serviceCards.forEach(card => {
            card.style.backgroundColor = themeColor + '20'; // نیمه‌شفاف
        });
    }
});