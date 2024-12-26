// Elements
const formContainer = document.getElementById('form-container');
const successContainer = document.getElementById('success-container');
const createButton = document.getElementById('create-button');
const skillButton = document.getElementById('skill-button');
const skillDropdown = document.getElementById('skill-dropdown');
const newCallButton = document.getElementById('new-call-button');

// Show skill dropdown on button click
skillButton.addEventListener('click', () => {
    skillDropdown.classList.toggle('hidden');
});

// Simulate sending the call to the server
createButton.addEventListener('click', function() {
    console.log('Create button clicked');
    const skill = skillDropdown.value;
    const location = document.getElementById('location-search').value;

    if (skill && location) {
        console.log('Sending data to server:', { skill, location });
        fetch('/create-reading', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ skill })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            if (data.success) {
                formContainer.classList.add('hidden');
                successContainer.classList.remove('hidden');
            } else {
                alert('Failed to create reading');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill in all fields');
    }
});

// Reset form for new call
newCallButton.addEventListener('click', function() {
    formContainer.classList.remove('hidden');
    successContainer.classList.add('hidden');
    skillDropdown.value = '';
    document.getElementById('location-search').value = '';
});
