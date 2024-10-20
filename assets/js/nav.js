let hamburgerIcon = document.querySelector('#hamburger-icon');
let hamburgerUl = document.querySelector('#hamburger-ul');

let hamburgerChecker = false;
console.log(hamburgerChecker);

hamburgerIcon.addEventListener('click', () => {
    if (!hamburgerChecker) {
        hamburgerUl.style.top = '0.2rem';
        hamburgerChecker = true;

    } else {
        hamburgerUl.style.top = '-15rem';
        hamburgerChecker = false;
    }
})