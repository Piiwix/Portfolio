// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
});

// Carrousel
document.querySelectorAll('.carousel').forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = carousel.querySelectorAll('img');
    let index = 0;
    function showImage(i) {
    index = (i + images.length) % images.length;
    imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    }
    carousel.querySelector('.prev').addEventListener('click', () => showImage(index - 1));
    carousel.querySelector('.next').addEventListener('click', () => showImage(index + 1));
    showImage(0);
});