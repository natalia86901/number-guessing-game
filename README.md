🎯 Number Guessing Game
A simple, browser-based number guessing game where the player tries to guess a randomly generated number between 1 and 20.

📖 About
The game generates a secret random number from 0 to 20 at the start of each session. The player enters guesses and receives hints — 
whether to guess higher or lower — until they find the correct number.

🚀 Features

Random number generation on every page load
Real-time feedback with directional hints (higher / lower)
Input validation with friendly error messages
Win screen with a celebratory image
Clean alert UI powered by SweetAlert2

🛠️ Technologies Used

HTML — page structure
CSS — styling
JavaScript — game logic
SweetAlert2 — popup alerts and modals

📁 Project Structure

repository-name/
├── index.html
├── style.css
├── script.js


✅ Input Validation
The game handles the following invalid inputs:
InputResponseNumber outside 1–20Error: "Enter the number from 1 to 20!, "Non-numeric textError: "Enter the number!"

📦 Dependencies
This project uses SweetAlert2 via CDN. 
html<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
