<button id="hamburgerBtn">&#9776;</button><ul id="primaryNav">
    function toggleMenu(params) {
        document.getElementById('primaryNav').classList.toggle("open")
    }
let x= document.getElementById('hamburgerBtn');
x.onclick= toggleMenu;