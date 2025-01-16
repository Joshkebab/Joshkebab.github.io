const topbar = document.querySelector('.topbar');

// Toggle contacts on mobile/small screens
function toggleContacts() {
    topbar.classList.toggle('show-contacts');
}

// Handle the resizing of the window and close the contacts if the window is resized to a larger size
function handleResize() {
    const belowContacts = document.querySelector('.below-contacts');
    if (window.innerWidth >= 1000) {
        if (belowContacts.style.display === 'flex') {
            topbar.classList.remove('show-contacts');
        }
        belowContacts.style.display = 'none';
    } else {
        belowContacts.style.display = 'flex';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
