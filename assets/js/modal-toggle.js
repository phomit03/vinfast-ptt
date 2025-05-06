function showContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

function showTestDriveForm() {
    document.getElementById('testDriveForm').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Đóng modal khi click bên ngoài nội dung modal
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}