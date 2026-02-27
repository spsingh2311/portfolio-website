// Typing Animation
new Typed("#typing", {
    strings: ["Web Developer", "AI Enthusiast", "Problem Solver"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Scroll Reveal
ScrollReveal().reveal('.section, .card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

// 3D Background
tsParticles.load("particles-js", {
    particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});

// Resume Generator
function generateResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Satyam Pratap Singh", 20, 20);
    doc.text("Web Developer | AI Enthusiast", 20, 30);
    doc.text("Skills: HTML, CSS, JS, Python", 20, 40);
    doc.save("Satyam_Resume.pdf");
}

// Contact Form (mailto)
document.getElementById("contact-form")
.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    const mailtoLink = `mailto:your-spsingh231104@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
});
