//hamburger tog

const toggleButton = document.getElementById ('hamburger');
const navLinks = document.getElementById('navLinks');
    toggleButton.addEventListener('click', () => {
     navLinks.classList.toggle('active')
});

function closeMenu() {
    navLinks.classList.toggle ('active');
}






//submit  name email

const submitBtn = document.querySelector('#submit');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');

const fName = document.querySelector('input');

fName.addEventListener('input', () =>{
  fName.setCustomValidity('');
  fName.checkValidity();
  console.log(fName.checkValidity());
  if(fName.validity.valid == true){
    fName.style.borderColor = '#13315c';
  }
});

fName.addEventListener('invalid', () => {
    fName.setCustomValidity('Not a valid entry');
    fName.style.borderColor = '#832232';
  });
  
  const lName = document.querySelector('#last-name');
  
  lName.addEventListener('input', () =>{
    lName.setCustomValidity('');
    lName.checkValidity();
    console.log(lName.checkValidity());
    if(lName.validity.valid == true){
      lName.style.borderColor = '#13315c';
    }
  });

  lName.addEventListener('invalid', () => {
    lName.setCustomValidity('NICE TRY');
    lName.style.borderColor = '#832232';
  });

  //const email = document.querySelector('#email');

email.addEventListener('input', () =>{
  email.setCustomValidity('');
  email.checkValidity();
  console.log(email.checkValidity());
  if(email.validity.valid == true){
    email.style.borderColor = '#13315c';

    email.addEventListener('invalid', () => {
        email.setCustomValidity(`NOT TODAY`);
        email.style.borderColor = '#832232';
      });
      

submitBtn.addEventListener('click', () => {
        submitBtn.textContent = 'Submitted';
        console.log(`
        First Name: ${fName.value}
        Last Name: ${lName.value}
        Email: ${email.value}`)
});
  }
});

//submitBtn.innerText = 'Submitted!';
