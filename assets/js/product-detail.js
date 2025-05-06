// Thumbnail image click handler
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function () {
        // Remove active class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(t => {
            t.classList.remove('active');
        });

        // Add active class to clicked thumbnail
        this.classList.add('active');

        // Change main image
        const newImageSrc = this.getAttribute('data-image');
        document.getElementById('mainImage').src = newImageSrc;

        // Update active color option
        const color = this.getAttribute('data-color');
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-color') === color) {
                option.classList.add('active');
            }
        });
    });
});

// Color option click handler
document.querySelectorAll('.color-option').forEach(color => {
    color.addEventListener('click', function () {
        // Remove active class from all color options
        document.querySelectorAll('.color-option').forEach(c => {
            c.classList.remove('active');
        });

        // Add active class to clicked color
        this.classList.add('active');

        // Change main image
        const newImageSrc = this.getAttribute('data-image');
        document.getElementById('mainImage').src = newImageSrc;

        // Update active thumbnail
        const color = this.getAttribute('data-color');
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
            if (thumb.getAttribute('data-color') === color) {
                thumb.classList.add('active');
            }
        });
    });
});

// Thumbnail arrows functionality
document.querySelector('.thumbnail-arrow-left').addEventListener('click', function () {
    const container = document.querySelector('.thumbnail-container');
    container.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});

document.querySelector('.thumbnail-arrow-right').addEventListener('click', function () {
    const container = document.querySelector('.thumbnail-container');
    container.scrollBy({
        left: 150,
        behavior: 'smooth'
    });
});

// Hide arrows when at the start/end of scroll
const thumbnailContainer = document.querySelector('.thumbnail-container');
const arrowLeft = document.querySelector('.thumbnail-arrow-left');
const arrowRight = document.querySelector('.thumbnail-arrow-right');

function updateArrowVisibility() {
// Hide left arrow if at the start
    if (thumbnailContainer.scrollLeft <= 10) {
        arrowLeft.style.display = 'none';
    } else {
        arrowLeft.style.display = 'flex';
    }

// Hide right arrow if at the end
    if (thumbnailContainer.scrollLeft + thumbnailContainer.clientWidth >= thumbnailContainer.scrollWidth - 10) {
        arrowRight.style.display = 'none';
    } else {
        arrowRight.style.display = 'flex';
    }
}

thumbnailContainer.addEventListener('scroll', updateArrowVisibility);

// Initial check
updateArrowVisibility();




