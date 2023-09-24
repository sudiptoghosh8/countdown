// Set the target date and time (e.g., December 31, 2023 at 00:00:00)
const targetDate = new Date('2023-24-31T00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'Event has started!';
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
