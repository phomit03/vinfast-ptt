function showContactForm() {
    document.getElementById('contactForm').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showTestDriveForm() {
    document.getElementById('testDriveForm').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = '';
}

// Đóng modal khi click bên ngoài nội dung modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
    }
}
