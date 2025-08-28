# Stone_paper_scissor_game

A simple Stone–Paper–Scissor game built with HTML, CSS, and JavaScript. This is a 2-player auto-randomized version, where each player’s choice is generated randomly with every play.

🎮 Features

Random choices for both players

Clear display of results: Player 1 Won, Player 2 Won, or Match Draw

Dynamic color indicators:

✅ Winner section turns green

❌ Loser section turns red

🤝 Draw highlights both in light green

Clean and minimal UI

🧰 Tech Stack

HTML5 – game structure

CSS3 – styling (linked as style.css)

JavaScript (ES6) – game logic & DOM updates

🚀 How to Run Locally

Clone this repository

git clone https://github.com/Gunjan-web-dev/stone-paper-scissor.git
cd stone-paper-scissor


Open index.html in your browser

Or start a local server (Python example):

python -m http.server 8000


Visit → http://localhost:8000

🧠 Game Logic Overview

Both players get a random number (1–3) → mapped to stone, paper, scissor.

The winner is decided using standard rules:

Stone 🪨 beats Scissor ✂️

Scissor ✂️ beats Paper 📄

Paper 📄 beats Stone 🪨

Draw if both choices are the same.

📸 Screenshots / Demo


📌 Future Improvements

Manual player input instead of both random

Scoreboard to track wins/losses

Animations and sound effects

Dark mode
