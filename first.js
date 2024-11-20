// Add dynamic greeting
document.addEventListener('DOMContentLoaded', () => {
    const hours = new Date().getHours();
    const heroText = document.querySelector('.hero h1');
    if (hours < 12) {
        heroText.textContent = 'Good Morning, I am Mehedi Hasan Moon!';
    } else if (hours < 18) {
        heroText.textContent = 'Good Afternoon, I am Mehedi Hasan Moon!';
    } else {
        heroText.textContent = 'Good Evening, I am Mehedi Hasan Moon!';
    }
});
