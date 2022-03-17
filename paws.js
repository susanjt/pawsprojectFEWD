//hamburger tog

//const toggleButton = document.getElementById ('hamburger');
//const navLinks = document.getElementById('navLinks');

//toggleButton.addEventListener('click', () => {
   // navLinks.classList.toggle('active')
//});

//function closeMenu() {
   // navLinks.classList.toggle ('active');
//}


function toggleMenu(params) {
    document.getElementById("navLinks").classList.toggle("open");
}
let x= document.getElementById('hamburgerBtn');
x.onclick= toggleMenu;




//submit  name email

const submitBtn = document.getElementById('btn');

    submitBtn = addEventListener('click', (e) => {
    e.preventDefault();

    submitBtn.innerText = 'Submitted!';
});

