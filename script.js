// the the welcome message
// This script animates the welcome message on the homepage
const pot = "Welcome to My Portfolio";
let welcomeMessage = '';
let i = 0;

const interval = setInterval(() => {
  if (i < pot.length) {
    welcomeMessage += pot[i];
    document.querySelector('.welcome').innerHTML = welcomeMessage;
    i++;
  } else {
    clearInterval(interval); // Stop when done
  }
}, 100);

// toggle between tabs function

function toggleTab(event, contentId) {
  const tabcontent = document.querySelectorAll('.tabcontent');
  const tab = document.querySelectorAll('.tab');

  // Hide all tab content
  tabcontent.forEach(content => {
    content.style.display = 'none';
  });

  // Remove active class from all tab links
  tab.forEach(link => {
    link.classList.remove('active');
  });

  // Show the clicked tab content and add active class to the clicked link
  document.getElementById(contentId).style.display = 'block';
  event.currentTarget.classList.add('active');


}

// default to show the first tab content
document.querySelector('.default').click();