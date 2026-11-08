

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


/* Dark Mode Toggle */

const darkModeToggle =
    document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
    );
});


/* Contact Form Interaction */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const senderName =
        document.getElementById("name").value.trim();

    alert(
        "Thank you, " + senderName +
        ", your message has been sent!"
    );

    contactForm.reset();
});
