document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const notification = document.getElementById('notification');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(signupForm);
        const response = await fetch('/signup', {
            method: 'POST',
            body: formData
        });
        const data = await response.text();
        notification.innerText = data;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
        signupForm.reset(); // Clear form fields after submission
    });
});
