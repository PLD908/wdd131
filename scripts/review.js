document.addEventListener('DOMContentLoaded', () => {
    let count = parseInt(localStorage.getItem('reviewCount') || '0');
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCount').textContent = count;
});