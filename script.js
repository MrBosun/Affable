// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Display the splash screen for 7 seconds
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('homepage').classList.remove('hidden');
    }, 7000);
});
