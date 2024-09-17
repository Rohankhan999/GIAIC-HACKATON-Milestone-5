// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    //collect input values//
    var username = document.getElementById('Username').value;
    var name = document.getElementById('Name').value;
    var fathername = document.getElementById('fathername').value;
    var Phone = document.getElementById('phno').value;
    var email = document.getElementById('email').value;
    var Address = document.getElementById('Address').value;
    var Education = document.getElementById('Education').value;
    var Skills = document.getElementById('Skills').value;
    var WorkExperience = document.getElementById('WorkExperience').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        fathername: fathername,
        email: email,
        Phone: Phone,
        Address: Address,
        Education: Education,
        WorkExperience: WorkExperience,
        Skills: Skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(Phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(Education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(WorkExperience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(Skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('Username').value =
                username;
            document.getElementById('Name').value =
                resumeData.name;
            document.getElementById('fathername').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phno').value =
                resumeData.phone;
            document.getElementById('Address').value =
                resumeData.phone;
            document.getElementById('Education').value =
                resumeData.education;
            document.getElementById('WorkExperience').value
                = resumeData.experience;
            document.getElementById('Skills').value =
                resumeData.skills;
        }
    }
});
