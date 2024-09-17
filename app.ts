// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as
HTMLDivElement;

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as
HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as
HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect input values
 //collect input values//
 const username = (document.getElementById('Username') as HTMLInputElement).value;
 const name = (document.getElementById('Name') as HTMLInputElement).value;
 const fathername = (document.getElementById('fathername') as HTMLInputElement).value
 const Phone = (document.getElementById('phno') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const Address = (document.getElementById('Address') as HTMLInputElement).value
 const Education = (document.getElementById('Education') as HTMLTextAreaElement).value
 const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value
 const WorkExperience = (document.getElementById('WorkExperience') as HTMLTextAreaElement).value

// Save form data in localStorage with the username as the key
const resumeData = {
name,
fathername,
email,
Phone,
Address,
Education,
WorkExperience ,
Skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
// Generate the resume content dynamically

const resumeHTML = `
<h2>Editable Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${Phone}</span></p>
<h3>Education</h3>
<p contenteditable="true">${Education}</p>
<h3>Experience</h3>
<p contenteditable="true">${WorkExperience}</p>
<h3>Skills</h3>
<p contenteditable="true">${Skills}</p>
`;
// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('Username') as HTMLInputElement).value =
username;
(document.getElementById('Name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('fathername') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phno') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('Address') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('Education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('WorkExperience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('Skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});