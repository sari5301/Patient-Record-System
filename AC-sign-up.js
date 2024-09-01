document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-up-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (email && password) {
            
            console.log('Sign-up details:', { email, password });
            alert('Sign-up successful!');
            window.location.href = 'AC-sign-in.html'; 
        } else {
            alert('Please fill in all fields.');
        }
    });
});
