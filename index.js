import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from the environment variables
const genAI = new GoogleGenerativeAI('AIzaSyD_nK60S4juEUda9MqBC8Z5G0qiPEvwGk0');

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Variable to keep track of cooldown status
let isOnCooldown = false;

// Function to call AI with cooldown and error handling
async function generateContent(prompt) {
  if (isOnCooldown) {
    console.log("Please cooldown, it's time to process.");
    return; // Stop the function if it's still in cooldown period
  }

  try {
    // Set cooldown to true
    isOnCooldown = true;

    // Call the AI to generate content
    const result = await model.generateContent(prompt);

    // Log the result to the console
    // console.log(result.response.text());
    return result;
  } catch (err) {
    // Log any error from the AI model
    console.error("Error generating content:", err);
  } finally {
    // Start the cooldown timer (12 seconds)
    setTimeout(() => {
      isOnCooldown = false; // Reset the cooldown after 12 seconds
    }, 12000);
  }
}

// Default export of the function
export default generateContent;
