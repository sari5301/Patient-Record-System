document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reset-password-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const email = document.getElementById('reset-email').value;
        const newPassword = document.getElementById('new-password').value;

        if (email && newPassword) {
         
            console.log('Password reset details:', { email, newPassword });
            alert('Password reset successful!');
            window.location.href = 'AC-sign-in.html'; 
        } else {
            alert('Please fill in all fields.');
        }
    });
});
