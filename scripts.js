/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    form.addEventListener('submit', function(event) { // add a submit event listener to the form
        event.preventDefault(); // prevents the form from submitting
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        if (email === '') { // validate if email field is empty
            messageDiv.textContent = 'Please enter a valid email address.';
            // error message styling
            messageDiv.style.color = '#fff';
            messageDiv.style.backgroundColor = '#fe2d2dff'; // red colour for errors
            messageDiv.style.fontWeight = '600'
            messageDiv.style.padding = '0.5rem';
            messageDiv.style.borderRadius = '5px';
            messageDiv.style.marginTop = '1.5rem';
        } else {
            // success message styling
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.color = '#fff';
            messageDiv.style.backgroundColor = '#2F855A'; // dark green colour for success
            messageDiv.style.fontWeight = '600'
            messageDiv.style.padding = '0.5rem';
            messageDiv.style.borderRadius = '5px';
            messageDiv.style.marginTop = '1.5rem';
            
            // clear the input field
            emailInput.value = '';
        }
    });
});