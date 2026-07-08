const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#viewer');
const modalImage = document.querySelector('#viewer-img');
const closeButton = modal.querySelector('.close-viewer');

// OPEN MODAL
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const fullImage = e.target.getAttribute('data-full');
        modalImage.src = fullImage;
        modal.showModal();
    }
});

// CLOSE BUTTON
closeButton.addEventListener('click', () => {
    modal.close();
});

// CLICK OUTSIDE IMAGE
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// ESC KEY CLOSE
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.open) {
        modal.close();
    }
});
