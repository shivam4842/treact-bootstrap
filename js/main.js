
// tabs 
function openTab(tabName) {
    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove 'active' class from all tab buttons
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the clicked tab content
    document.getElementById(tabName).classList.add('active');

    // Add 'active' class to the clicked button
    var activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabName);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Open the default tab
document.addEventListener('DOMContentLoaded', () => {
    openTab('starters');
});