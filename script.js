

/* Personalized Welcome Message */

const userName = prompt("What is your name?");

const welcomeMessage =
    document.getElementById("welcomeMessage");

if (userName && userName.trim() !== "") {
    welcomeMessage.textContent =
        "Welcome to my webpage, " + userName.trim() + "!";
} else {
    welcomeMessage.textContent =
        "Welcome to my webpage!";
}


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

const skillsList =
    document.getElementById("skillsList");

skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});



/* Dynamically Add a New Project Paragraph */

const projectsSection = document.getElementById("projects");

const newProjectParagraph = document.createElement("p");

newProjectParagraph.textContent =
    "One of my recent projects involved creating " +
    "an interactive gaming website using HTML, CSS, " +
    "and JavaScript.";

projectsSection.appendChild(newProjectParagraph);



/* Modify Existing HTML Elements */

// First element: About Me heading
const aboutHeading = document.querySelector("#about h2");

aboutHeading.textContent = "About Me & My Background";
aboutHeading.classList.add("highlight-heading");

// Second element: Projects heading
const projectsHeading = document.getElementById("projects")
    .querySelector("h2");

projectsHeading.textContent = "My Web Development Projects";
projectsHeading.classList.add("highlight-heading");



/* Dark Mode Toggle */

const darkModeToggle =
    document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
    );
});



/* Timed Contact Form Confirmation */

const contactForm = document.getElementById("contactForm");

const submitButton = document.getElementById("submitButton");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Check form validity
    if (!contactForm.reportValidity()) {
        return;
    }

    // Get the sender's name
    const senderName =
        document.getElementById("name").value.trim();

    // Display loading message
    formStatus.textContent = "Sending message...";

    // Disable button while waiting
    submitButton.disabled = true;

    // Delay confirmation by 3 seconds
    setTimeout(function() {

        // Replace loading message
        formStatus.textContent =
            "Thank you, " + senderName +
            "! Your message has been sent successfully!";

        // Reset the form
        contactForm.reset();

        // Enable button again
        submitButton.disabled = false;

    }, 3000);

});
