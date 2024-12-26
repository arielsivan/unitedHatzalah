// Elements
const successContainer = document.getElementById('success-container');
const createButton = document.getElementById('create-button');
const skillDropdown = document.getElementById('skill-dropdown');
const newCallButton = document.getElementById('new-call-button');

// Simulate sending the call to the server
createButton.addEventListener('click', () => {
    const skill = skillDropdown.value;
    const location = document.getElementById('location-search').value;

    if (skill && location) {
        fetch('/calls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ skill, location })
        })
        .then(response => {
            if (response.ok) {
                // Show success alert or custom pop-up
                // alert('קריאה נוצרה בהצלחה!'); // Popup alert in Hebrew
                successContainer.classList.remove('hidden'); // Optionally display a success container
            } else {
                alert('שגיאה ביצירת קריאה, נסה שוב.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('שגיאה ביצירת קריאה.');
        });
    } else {
        alert('אנא מלא את כל השדות הנדרשים.');
    }
});

// Reset form for a new call
newCallButton.addEventListener('click', () => {
    skillDropdown.value = '';
    document.getElementById('location-search').value = '';
    successContainer.classList.add('hidden'); // Hide the success container
});
