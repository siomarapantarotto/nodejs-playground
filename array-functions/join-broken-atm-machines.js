/**
 * Title: Combining broken ATM machines
 * Description: Combining broken ATM machines into a text message using 
 * join() method and sending the message using different ways.
 * Author: siomara.com.br
 * Date: September 2024
 */

// Initialize array with broken ATM machines
const brokenATMs = ["ATM1", "ATM3", "ATM5", "ATM7", "ATM9"];
console.log("Broken ATMs: ", brokenATMs);
console.log("Length: " + brokenATMs.length);

// Combine broken ATM machines into a short text message
const message = "The following " + brokenATMs.length + " ATMs are broken: " 
                + brokenATMs.join(", ") + ". Please fix them as soon as possible.";

// Send the message using different messaging services
sendEmail(message);
sendSMS(message);
sendWhatsApp(message);

/**
 * Functions responsible for sending messages.
 * To be implemented using different messaging services.
 * @param {string} message - The message to be sent.
 */
function sendEmail(message) {
    console.log("Messaging via Email...\t\t" + message);
}

function sendSMS(message) {
    console.log("Messaging via SMS...\t\t" + message);
}

function sendWhatsApp(message) {
    console.log("Messaging via WhatsApp...\t" + message);
}