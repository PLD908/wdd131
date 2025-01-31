document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendMessage");
    const contactForm = document.getElementById("contactForm");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form submission

        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate the form fields
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Create an object to store the message
        const contactMessage = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toLocaleString()
        };

        // Retrieve existing messages from LocalStorage
        let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        
        // Add the new message to the array
        messages.push(contactMessage);
        
        // Store the updated messages array in LocalStorage
        localStorage.setItem("contactMessages", JSON.stringify(messages));

        // Show success message
        alert("Message sent and stored successfully!");

        // Reset form after submission
        contactForm.reset();
    });
});