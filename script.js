const themeSwitcher = document.querySelector('.theme-switcher'); // Select your img element
const body = document.body; // Target the body for theme switching

// Check saved theme on page load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeSwitcher.src = 'images/theme-light-dark.svg'; // Update to dark theme icon
} else {
  themeSwitcher.src = 'images/theme-light-dark.svg'; // Default to light theme icon
}

// Add click event listener to the theme switcher image
themeSwitcher.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    // Switch to dark theme
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    themeSwitcher.src = 'images/theme-light-dark.svg';
  } else {
    // Switch to light theme
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    themeSwitcher.src = 'images/theme-light-dark.svg';
  }
});
