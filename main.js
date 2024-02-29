const headerBtn = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');

// State
let isMobileNavOpen = false;

headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;
  if (isMobileNavOpen) {
    mobileNav.style.left = '0';
  } else {
    mobileNav.style.left = '100%';
  }
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileNavOpen = false;
    mobileNav.style.left = '100%';
    document.body.style.overflowY = 'auto';
  });
});
  
  
let sunBtn = document.getElementById("sun");
let mobSun = document.getElementById("mob-sun");

sunBtn.addEventListener('click', switchMode);
mobSun.addEventListener('click', switchMode);
mobSun.addEventListener('click', close);

let isDarkMode = false;
function switchMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
    document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--second-bg-color', '#F0F0F0');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--main-color', '#007F7F');
        document.querySelector('header').style.backgroundColor = "#333333";
        
    } else {
     document.documentElement.style.setProperty('--bg-color', '#111111');
        document.documentElement.style.setProperty('--second-bg-color', '#151515');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--main-color', '#04fffb');
        document.querySelector('header').style.backgroundColor = "black";
    }
}

function close() {
    isMobileNavOpen = false;
    mobileNav.style.left = '100%';
    document.body.style.overflowY = 'auto';
}

const items = document.querySelectorAll('.bg-image');

items.forEach(item => {
  item.addEventListener('mouseover', function() {
    const nestedDiv = this.querySelector('.item-btns');
    if (nestedDiv) {
      nestedDiv.style.bottom = '25%';
    }
  });

  item.addEventListener('mouseout', function() {
    const nestedDiv = this.querySelector('.item-btns');
    if (nestedDiv) {
      nestedDiv.style.bottom = '100%';
    }
  });
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = "scale(1.3)"
    })
})

skills.forEach(skill => {
    skill.addEventListener('mouseout', () => {
        skill.style.transform = "scale(1)"
    })
})

let error = document.getElementById('alert');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

function validateForm() {
    if (!validEmail(email.value) && !validNumber(phone.value)) {
        error.textContent = "Both Email and Phone number is not valid."
        email.value = "";
        phone.value = "";
        error.style.display = "inline";
        return false;
    }
    if (!validEmail(email.value)) {
        error.textContent = "Email is not valid."
        email.value = "";
        error.style.display = "inline";
        return false;
    }
    if (!validNumber(phone.value)) {
        error.textContent = "Phone Number is not valid."
        phone.value = "";
        error.style.display = "inline";
        return false;
    } else {
        error.style.display = "none";
        alert("Thanks for reaching out! I'll get back to you as soon as possible.");
        return true;
    }
}

function validEmail(email) {
    if (email.includes("@") && email.slice(-4) == ".com") {
        return true;
    } else {
        return false;
    }
}

function validNumber(phone) {
    let numberString = phone.toString();

    if (numberString.slice(0, 2) == "09" && numberString.length == 11) {
        return true;
    } else {
        return false;
    }
}
