// Function to adjust the repulse distance based on screen size
function adjustRepulseDistance() {
    const newRepulseDistance = getFractionOfScreenWidth(0.2); // Calculate new distance based on screen width
    window.repulseDistance = newRepulseDistance; // Update the constant

    // Log the new distance for debugging
    console.log('Updated repulse distance:', newRepulseDistance);
}

// Call adjustRepulseDistance when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    adjustRepulseDistance(); // Set initial distance based on current screen size

    // Update the repulse distance on window resize
    window.addEventListener('resize', () => {
        adjustRepulseDistance(); // Adjust repulse distance on resize
    });
});
