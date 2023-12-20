function alternateCapitalization(text) {
    // Initialize an empty string to store the modified text
    let result = '';

    // Loop through each character in the input text
    for (let i = 0; i < text.length; i++) {
        // Check if the current character is a letter
        if (/[a-zA-Z]/.test(text[i])) {
            // Check if the letter is uppercase "I" and convert it to lowercase
            if (text[i].toUpperCase() === 'I') {
                result += 'i ';
            } 
            else if (text[i].toLowerCase() === 'l'){
            
            result += 'L ';
            }
            else {
                // Alternate capitalization based on the index
                result += i % 2 === 0 ? text[i].toUpperCase() + ' ' : text[i].toLowerCase() + ' ';
            }
        } else {
            // If the character is not a letter, just append it as is
            result += text[i] + ' ';
        }
    }

    // Trim any extra spaces at the end and return the modified text
    return result.trim();
}

function applyAlternateCapitalization() {
    // Get the input text from the textarea
    const inputText = document.getElementById('inputText').value;

    // Call the alternating capitalization function
    const modifiedText = alternateCapitalization(inputText);

    // Update the HTML content with the modified text
    document.getElementById('modifiedText').innerHTML = `${modifiedText}`;
}

function copyTextboxContent() {
    // Get the text from the textarea
    const textbox = document.getElementById('modifiedText');
    const textToCopy = textbox.value;

    // Create a temporary textarea element to copy the text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select the text in the temporary textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    showAlert('Text copied!');

}

function showAlert(message) {
    var alertBanner = document.getElementById('alertBanner');

    // Set the message
    alertBanner.innerHTML = message;

    // Show the alert banner
    alertBanner.style.display = 'block';

    // Hide the alert banner after 3 seconds (adjust as needed)
    setTimeout(function () {
        alertBanner.style.display = 'none';
    }, 2000);
}