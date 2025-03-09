function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
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

// Tutup modal hanya jika klik di luar modal-content
document.getElementById("projectModal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();
    }
});

// Ensure the modal close button works
document.querySelector(".close").addEventListener("click", closeModal);

