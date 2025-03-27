const workoutButton = document.getElementById('workoutButton'); // Replace with actual workout button
const contactContainer = document.getElementById('contactContainer');

// Toggle the position of the contact container when workout is clicked
workoutButton.addEventListener('click', function() {
    contactContainer.classList.toggle('moved');
});

// Optional: Reset position of the contact section when workout instruction is closed
const workoutInstruction = document.getElementById('workoutInstruction'); // Replace with actual element
workoutInstruction.addEventListener('click', function() {
    contactContainer.classList.remove('moved');
});
