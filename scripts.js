// Sidebar functionality
var sidemenu = document.getElementById("sidemenu");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Function to open the sidebar
function openmenu() {
    sidemenu.style.right = "0";
}

// Function to close the sidebar
function closemenu() {
    sidemenu.style.right = "-200px";
}

// Function to open tabs and close the sidebar when a tab is clicked
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    // Close sidebar when a tab is clicked
    closemenu();
}

// Close sidebar when clicking outside of it
window.addEventListener('click', function (e) {
    if (!sidemenu.contains(e.target) && !e.target.matches('.fa-bars')) {
        closemenu();
    }
});

// Close sidebar when a menu tab (Home, About, Portfolio, Contact) is clicked
var menuLinks = sidemenu.getElementsByTagName("a");
for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", closemenu);
}

// Form submission handling
const scriptURL = 'https://script.google.com/macros/s/AKfycbzwzBgM5F2Ql-f86_IrbN4EY0x-Z5WPUE1oYcr1DV97Z-ShvpNd1M6r4R54c8qtLrw0jQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
