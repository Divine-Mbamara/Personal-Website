//Contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Stop form from refreshing the page

    // Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    //Validate email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // stop the form from submitting
    }

    // Send with fetch to EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_3v5tyrf',
            template_id: 'template_prfzvpp',
            user_id: 'JF_kPGHYsR3xd7UtV',
            template_params: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        })
    })
        .then((response) => {
            if (response.ok) {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            } else {
                throw new Error('Email failed to send.');
            }
        })
        .catch((err) => {
            alert('Error sending message. Please try again later.');
            console.error('Fetch error:', err);
        });
});

//Project Popup
function togglePopup1(){
    document.getElementById("project-popup-1").classList.toggle("active");
}
function togglePopup2(){
    document.getElementById("project-popup-2").classList.toggle("active");
}
function togglePopup3(){
    document.getElementById("project-popup-3").classList.toggle("active");
}
function togglePopup4(){
    document.getElementById("project-popup-4").classList.toggle("active");
}
function togglePopup5(){
    document.getElementById("project-popup-5").classList.toggle("active");
}
function togglePopup6(){
    document.getElementById("project-popup-6").classList.toggle("active");
}
function togglePopup7(){
    document.getElementById("project-popup-7").classList.toggle("active");
}
function togglePopup8(){
    document.getElementById("project-popup-8").classList.toggle("active");
}