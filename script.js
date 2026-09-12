// Google Apps Script Web App URL
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxsg38yHKCk5eeITeKC4V5N4NccE2mvULPueCkFewBNrXq1400CkzL3j-1j6A70jQmQ/exec";

// Get the contact form
const contactForm = document.getElementById("contactForm");

// Get the response message area
const responseMessage = document.getElementById("responseMessage");


// Function to handle the form submission
async function submitMessage() {

    // Get the user's information
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    // Check if any field is empty
    if (fullName === "" || email === "" || message === "") {

        responseMessage.textContent =
            "Please complete all fields.";

        responseMessage.classList.add("highlight");

        return;
    }


    // Show a sending message
    responseMessage.textContent =
        `Thank you, ${fullName}! Your message is being sent...`;

    responseMessage.classList.add("highlight");


    try {

        // Send the information to Google Sheets
        await fetch(scriptURL, {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify({

                fullName: fullName,

                email: email,

                message: message

            })

        });


        // Show success message
        responseMessage.textContent =
            `Thank you, ${fullName}! Your message has been sent successfully.`;


        // Clear the form
        contactForm.reset();

    } catch (error) {

        // Show error message
        responseMessage.textContent =
            "Sorry, something went wrong. Please try again.";

        console.error("Error:", error);

    }

}


// Run the function when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Call the function
    submitMessage();

});