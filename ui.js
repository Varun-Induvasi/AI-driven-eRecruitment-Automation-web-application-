document.addEventListener("DOMContentLoaded", function () {
    animateForm();
});

function animateForm() {
    document.querySelector('.bio-form').style.opacity = '1';
    document.querySelector('.bio-form').style.transform = 'translateY(0)';
}

function validateForm() {
    var isValid = true;
    var requiredFields = document.querySelectorAll('[required]');

    requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
            isValid = false;
            return;
        }
    });

    if (!isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Incomplete Form',
            text: 'Please fill out all required fields.',
            showConfirmButton: false,
            timer: 2000
        });
    }

    return isValid;
}

function submitForm() {
    if (validateForm()) {
        var selectedJob = document.getElementById("jobType").value;
        var resultMessageElement = document.getElementById("resultMessage");

        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            course: selectedJob
        };

        // Store the form data in localStorage (for demonstration purposes)
        localStorage.setItem('submittedData', JSON.stringify(formData));

        // Display a success message
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted!',
            text: 'Thank you for submitting your bio data.',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            if (selectedJob === 'java') {
                resultMessageElement.innerHTML = "Congratulations! You're hired for the skill round. Wait for a while you will be re-directed to the next stage.";
                setTimeout(function () {
                    window.location.href = 'ui2.html';
                }, 10000);
            }
            else if (selectedJob === 'frontend') {
                resultMessageElement.innerHTML = "Congratulations! You're hired for the skill round. Wait for a while we will direct you to the next stage.";
                setTimeout(function () {
                    window.location.href = 'ui3.html';
                }, 10000);
            }
            else if (selectedJob === 'dataanalyst') {
                resultMessageElement.innerHTML = "Congratulations! You're hired for the skill round. Wait for a while we will direct you to the next stage.";
                setTimeout(function () {
                    window.location.href = 'ui5.html';
                }, 10000);
            }
            else if(selectedJob === 'cybersecurity'){
                resultMessageElement.innerHTML = "Congratulations! You're hired for the skill round. Wait for a while we will direct you to the next stage.";
                setTimeout(function () {
                    window.location.href = 'ui4.html';
                }, 10000);
            }
            else if(selectedJob === 'software'){
                resultMessageElement.innerHTML = "Congratulations! You're hired for the skill round. Wait for a while we will direct you to the next stage.";
                setTimeout(function () {
                    window.location.href = 'ui6.html';
                }, 10000);
            }
            else {
                resultMessageElement.innerHTML = "Sorry, you're rejected.";
            }
        });
    }
}
