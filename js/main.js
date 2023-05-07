const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementList = document.querySelectorAll('.requirement-list li');
// we create an array of password requeriments with corresponding
//regular expressions and index od the requirement list item
const requirements = [
    {regex: /.{8,}/, index: 0}, // minimum characters
    {regex: /[0-9]/, index: 1}, // at least one number
    {regex: /[a-z]/, index: 2}, // at least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3}, //at least one special symbol
    {regex: /[A-Z]/, index: 4}, //at least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // updating icon and class if requeriment matched or not
        if(isValid) {
            requirementItem.firstElementChild.className = "bx bx-check";
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "bx bxs-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener('click', () => {
    //toggle the password input type between 'password' and 'text
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //update the eye icon color if input type == password
    if(passwordInput.type === "password"){
        eyeIcon.style.color = '#999';
    } else {
        eyeIcon.style.color = 'black';
    }
    
});