
/* Conditional Logic */

const projectCount = document.querySelectorAll(
    "#projects a:has(img)"
).length;

const universityResources = document.getElementById(
    "universityResources"
);

const personalProjects = document.getElementById(
    "personalProjects"
);

if (projectCount < 3) {
    universityResources.style.display = "block";
    personalProjects.style.display = "block";
} else {
    universityResources.style.display = "none";
    personalProjects.style.display = "block";
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


/* Dark Mode Toggle */

const darkModeToggle = document.getElementById(
    "darkModeToggle"
);

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
    );
});


/* Contact Form Interaction */

const contactForm = document.getElementById("contactForm");

const submitButton = contactForm.querySelector(
    'button[type="submit"]'
);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const senderName = document.getElementById("name").value;

    alert(
        "Thank you, " + senderName +
        ", your message has been sent!"
    );

    contactForm.reset();
});
