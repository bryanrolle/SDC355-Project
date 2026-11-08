
/* Welcome Message */

const welcome = document.getElementById("welcome");

const closeWelcome = document.getElementById("closeWelcome");

// Display welcome message when page loads
welcome.classList.remove("hidden");

// Close welcome message
closeWelcome.addEventListener("click", function() {
    welcome.classList.add("hidden");
});


/* Conditional Logic for Featured Content */

const projectCount = document.querySelectorAll(
    "#projects a:has(img)"
).length;

const universityResources =
    document.getElementById("universityResources");

const personalProjects =
    document.getElementById("personalProjects");

if (projectCount < 3) {
    universityResources.hidden = false;
    personalProjects.hidden = false;
} else {
    universityResources.hidden = true;
    personalProjects.hidden = false;
}


/* Skills Array and Loop */

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];

const skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});


/* Dynamically Add a Project Paragraph */

const projectsSection = document.getElementById("projects");

const newProjectParagraph = document.createElement("p");

newProjectParagraph.textContent =
    "One of my recent projects involved creating " +
    "an interactive gaming website using HTML, CSS, " +
    "and JavaScript.";

projectsSection.appendChild(newProjectParagraph);


/* Modify Existing HTML Elements */

const aboutHeading = document.querySelector("#about h2");

aboutHeading.textContent = "About Me & My Background";
aboutHeading.classList.add("highlight-heading");

const projectsHeading = document.querySelector("#projects h2");

projectsHeading.textContent = "My Web Development Projects";
projectsHeading.classList.add("highlight-heading");


/* Persistent Dark Mode */

const darkModeToggle =
    document.getElementById("darkModeToggle");

// Check saved dark mode preference
const savedDarkMode = localStorage.getItem("darkMode");

// Apply saved preference
if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
} else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
}

// Save dark mode preference
darkModeToggle.addEventListener("change", function() {

    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");

        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");

        localStorage.setItem("darkMode", "disabled");
    }

});


/* Timed Contact Form Confirmation */

const contactForm = document.getElementById("contactForm");

const submitButton = document.getElementById("submitButton");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Validate form
    if (!contactForm.reportValidity()) {
        return;
    }

    // Get sender's name
    const senderName =
        document.getElementById("name").value.trim();

    // Display loading message
    formStatus.textContent = "Sending message...";

    // Disable submit button
    submitButton.disabled = true;

    // Wait 3 seconds
    setTimeout(function() {

        // Display confirmation
        formStatus.textContent =
            "Thank you, " + senderName +
            "! Your message has been sent successfully!";

        // Reset form
        contactForm.reset();

        // Enable submit button
        submitButton.disabled = false;

    }, 3000);

});
