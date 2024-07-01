// script.js
function redirectToAdmin() {
    window.location.href = 'admin.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const formData = new FormData(contactForm);
            const email = formData.get('Email'); // Assuming email is a field in your form
            // Check if email belongs to admin (you can replace this with your logic)
            if (email === 'shalaka@gmail.com') {
                redirectToAdmin();
            } else {
                alert('Thank you for your response! We will get back to you soon.');
                contactForm.reset(); // Clear the form
            }
        });
    }
});
