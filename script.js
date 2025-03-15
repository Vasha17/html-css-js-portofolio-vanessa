document.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
        const menu = document.querySelector(".nav-menu");
        if (menu) {
            menu.classList.toggle("open");
        } else {
            console.error("Menu not found.");
        }
    }

    window.openModal = function (title, date, description, imageUrl) {
        const modalTitle = document.getElementById("modal-title");
        const modalDate = document.getElementById("modal-date");
        const modalDesc = document.getElementById("modal-description");
        const modalImage = document.getElementById("modal-image");
        const modal = document.getElementById("myModal");

        if (modalTitle) modalTitle.textContent = title;
        if (modalDate) modalDate.textContent = date;
        if (modalDesc) modalDesc.textContent = description;

        if (modalImage) {
            if (imageUrl) {
                modalImage.src = imageUrl;
                modalImage.style.display = "block";
            } else {
                modalImage.style.display = "none";
            }
        }

        if (modal) {
            modal.style.display = "flex";
        } else {
            console.error("Modal element not found.");
        }
    };

    window.closeModal = function () {
        const modal = document.getElementById("myModal");
        if (modal) {
            modal.style.display = "none";
        } else {
            console.error("Modal element not found.");
        }
    };

    // Event listener untuk klik di luar modal
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    } else {
        console.error("Modal element not found.");
    }

    // Ambil tombol close dengan class yang benar
    const closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    } else {
        console.error("Close button not found.");
    }
});
