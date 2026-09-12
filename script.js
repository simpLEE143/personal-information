// Get the contact form
const contactForm = document.getElementById("contactForm");

// Get the response message area
const responseMessage = document.getElementById("responseMessage");


// Function to handle the form submission
function submitMessage() {

    // Get the user's name
    let fullName = document.getElementById("fullName").value.trim();

    // Check if the name is empty
    if (fullName === "") {

        responseMessage.textContent =
            "Please enter your name.";

        responseMessage.classList.add("highlight");

    } else {

        // Create a personalized message
        responseMessage.textContent =
            `Thank you, ${fullName}! Your message has been received.`;

        // Add a CSS class to make the message visible
        responseMessage.classList.add("highlight");
    }
}


// Run the function when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Call the function
    submitMessage();

});