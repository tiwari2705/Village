// Digital Clock functionality
let clockInterval;

// Initialize clock when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeClock();
});

function initializeClock() {
    // Check if clock elements exist
    const timeElement = document.getElementById('digital-time');
    const dateElement = document.getElementById('date-display');

    if (!timeElement || !dateElement) {
        console.error('Clock elements not found');
        return;
    }

    // Update clock immediately
    updateClock();

    // Update clock every second
    clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {
    try {
        const now = new Date();

        // Get time components
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Determine AM/PM
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be displayed as 12

        // Format with leading zeros
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Update time display
        const timeElement = document.getElementById('digital-time');
        if (timeElement) {
            timeElement.innerHTML = `
                <span class="time-hours">${formattedHours}</span>
                <span class="time-separator">:</span>
                <span class="time-minutes">${formattedMinutes}</span>
                <span class="time-separator">:</span>
                <span class="time-seconds">${formattedSeconds}</span>
                <span class="time-period">${period}</span>
            `;
        }

        // Update date display
        const dateElement = document.getElementById('date-display');
        if (dateElement) {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            dateElement.textContent = now.toLocaleDateString('en-US', options);
        }

    } catch (error) {
        console.error('Error updating clock:', error);
    }
}

// Cleanup interval when page is unloaded
window.addEventListener('beforeunload', function() {
    if (clockInterval) {
        clearInterval(clockInterval);
    }
});