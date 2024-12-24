// Get all 'Show More' buttons
const buttons = document.querySelectorAll('.showDetails');

// Loop through each button and add event listeners
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the display of the additional info paragraph
        const moreInfo = button.nextElementSibling;
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            button.textContent = "Show Less";
        } else {
            moreInfo.style.display = "none";
            button.textContent = "Show More";
        }
    });
});
