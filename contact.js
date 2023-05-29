function validateForm() {
    let alert = document.getElementById('alertBox');
    alert.style.backgroundColor = "#f44336";

    // Check if the name field is empty.
    if (document.getElementById("name").value === "") {
        alert.innerHTML = "Please enter your name.";
        alert.style.display = 'block';
        return false;
    }

    // Check if the email field is empty or not a valid email address.
    if (document.getElementById("email").value === "" || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value)) {
        alert.innerHTML = "Please enter a valid email address.";
        alert.style.display = 'block';
        return false;
    }

    // Check if the message field is empty.
    if (document.getElementById("message").value === "") {
        alert.innerHTML = "Please enter a your message.";
        alert.style.display = 'block';
        return false;
    }

    return true;
}

function sendEmail() {
    let valid = this.validateForm();
    if (valid) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        Email.send({
            Host: "smtp.gmail.com",
            Username: "tamenemihret@gmail.com",
            Password: "Mercy@1323",
            To: 'ethiomihret1@gmail.com',
            From: email,
            Subject: name,
            Body: message,
        });

        let alert = document.getElementById('alertBox');
        alert.style.backgroundColor = "#04AA6D";
        alert.innerHTML = "Your email has been Successfully Sent";
        alert.style.display = 'block';

        document.getElementById("myForm").reset();

        setTimeout(closeModal, 2000);
    }

    function closeModal(){
        let alert = document.getElementById('alertBox');
        alert.style.display = "none";
    }

}