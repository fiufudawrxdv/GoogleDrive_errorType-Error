
// Get the toggle button and body element
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Define the local storage key
const STORAGE_KEY = 'color-scheme';

// Get the user's preferred color scheme from local storage or default to 'light'
const preferredColorScheme = localStorage.getItem(STORAGE_KEY) || 'light';

// Apply the user's preferred color scheme
applyColorScheme(preferredColorScheme);

// Toggle the color scheme on button click and update local storage
toggleButton.addEventListener('click', () => {
  const currentColorScheme = body.classList.contains('light') ? 'dark' : 'light';
  applyColorScheme(currentColorScheme);
  localStorage.setItem(STORAGE_KEY, currentColorScheme);
});

// Function to apply a color scheme class to the body element and the colorful-div element
function applyColorScheme(colorScheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(colorScheme);
  
  const colorfulDiv = document.getElementById('colorful-div');
  if (colorScheme === 'light') {
    colorfulDiv.style.backgroundColor = '#fff7c0';
    colorfulDiv.style.color = '#333';
  } else {
    colorfulDiv.style.backgroundColor = '#2d2d2d';
    colorfulDiv.style.color = '#f0f0f0';
  }
}
