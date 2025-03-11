function toggleMenu() {
    const menu = document.getElementById('mobile-nav');
    const icon = document.querySelector('.hamburger');
    menu.classList.toggle("active");
    icon.classList.toggle("open");
}

function openModal(title, date, description, imageUrl) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-date").textContent = date;
    document.getElementById("modal-description").textContent = description;
    const modalImage = document.getElementById("modal-image");
    if (imageUrl) {
        modalImage.src = imageUrl;
        modalImage.style.display = "block";
    } else {
        modalImage.style.display = "none";
    }
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside of modal-content
document.getElementById("projectModal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();
    }
});

// Ensure the modal close button works
document.querySelector(".close").addEventListener("click", closeModal);

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
    });
});

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open');
}
