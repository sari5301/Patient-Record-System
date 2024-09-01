document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        if (email && password) {
          
            console.log('Sign-in details:', { email, password });
            alert('Sign-in successful!');
            window.location.href = 'AC-patient-info.html'; 
        } else {
            alert('Please fill in all fields.');
        }
    });
});
