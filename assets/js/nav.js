let hamburgerIcon = document.querySelector('#hamburger-icon');
let hamburgerUl = document.querySelector('#hamburger-ul');
let hamburgerUlContainer = document.querySelector('#hamburger-ul-container');

let hamburgerChecker = false;
console.log(hamburgerChecker);

hamburgerIcon.addEventListener('click', () => {
    if (!hamburgerChecker) {
        // hamburgerUlContainer.classList.toggle
        hamburgerUl.style.top = '0.2rem';
        hamburgerChecker = true;

    } else {
        hamburgerUl.style.top = '-15rem';
        hamburgerChecker = false;
    }
})