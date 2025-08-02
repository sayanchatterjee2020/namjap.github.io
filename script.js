let count = 0;
const reminderAt = 5;

const countDisplay = document.getElementById('countDisplay');
const countBtn = document.getElementById('countBtn');
const resetBtn = document.getElementById('resetbtn');
const beepSound = document.getElementById('beepSound');

countBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

    if (count === reminderAt) {
        beepSound.play(); // 🔊 This is the correct way to play the sound
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});
