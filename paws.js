//hamburger tog

const toggleButton = document.getElementById ('hamburger');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    primaryNav.classList.toggle('active')
});


//submit  name email

const submitBtn = document.getElementById('btn');

    submitBtn = addEventListener('click', (e) => {
    e.preventDefault();

    submitBtn.innerText = 'Submitted!';
});
