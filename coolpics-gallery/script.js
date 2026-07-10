// Select elements
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#viewer');
const modalImage = document.querySelector('#viewer-img');
const closeButton = document.querySelector('.close-viewer');

// Open modal when clicking a thumbnail
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {

        // Get the small image path
        const smallSrc = e.target.getAttribute('src');

        // Replace "-sm" with "-lg" to load the large version
        const largeSrc = smallSrc.replace('-sm', '-lg');

        modalImage.src = largeSrc;

        modal.showModal();
    }
});

// Close modal when clicking the X button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.open) {
        modal.close();
    }
});
