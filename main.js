let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');


function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


let sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right='0';
}

function closemenu(){
    sidemenu.style.right='-150px';
}

const form = document.getElementById('myForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();

  
  
  // Create a new FormData object and populate it with the form data
  const formData = new FormData(form);
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Configure the request
  xhr.open(form.method, form.action);
  xhr.setRequestHeader('Accept', 'application/json');
  
  // Define the success callback function
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Form submission success
      msg.innerHTML = 'Message Sent';
    } else {
      // Form submission error
      msg.innerHTML = 'Error: ' + xhr.statusText;
    }
  };
  
  // Send the request
  xhr.send(formData);
});



//navigation bar withouth showing .html
function navigateToSection(event, sectionId) {
  event.preventDefault();
  document.getElementById(sectionId).scrollIntoView();
}

function closeMenu() {
  // Code to close the menu
}
