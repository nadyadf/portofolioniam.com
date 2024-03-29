/* ----- NAVIGATION BAR FUNCTION ----- */
let menuBtn = document.getElementById("myNavMenu");
let navList = document.getElementsByClassName("nav_list");
function myMenuFunction(){
    
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  const closeMenu = () => {
    menuBtn.className = "nav-menu";
  }

  for (let i = 0; i < navList.length; i++) {
    const element = navList[i];
    element.addEventListener("click", closeMenu);
  }

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  
    } else {
  
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  
    }
  }
  
  
  const skills = document.querySelectorAll('.project-box');

  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  

  const swipeTopAnimation = () => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    })
    
    sr.reveal('.project-box',{interval: 150})
  }


  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })

    /* -- HOME -- */
    
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})
    
    /* -- PROJECT BOX -- */
    sr.reveal('.experiences-select', {})
  
    /*  -- EXPERIENCES -- */
    sr.reveal('.experiences-container',{})
    
    /* -- HEADINGS -- */
    sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  const srLogo = ScrollReveal({
    origin: 'left',
    opacity: 0,
    distance: '80px',
    duration: 2000,
    reset: false
  })
  srLogo.reveal('.nav-logo', {delay: 300})
  /* -- ABOUT INFO & CONTACT INFO -- */
  

  const swipeLeftAnimation = () => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    })

    for (let i = 0; i < skills.length; i++) {
      if(i % 2 == 0){
        srLeft.reveal(skills[i], {delay: 100})
      }
    }
  }

  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  srLeft.reveal('.contact-info',{delay: 100})
  
  // /* -- ABOUT SKILLS & FORM BOX -- */

  const swipeRightAnimation = () => {
    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    })
    
    for (let i = 0; i < skills.length; i++) {
      if(i % 2 !== 0){
        srRight.reveal(skills[i], {delay: 100})
      }
    }
  }

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srRight.reveal('.form-control',{delay: 100});

  const animationResponsive = (x) => {
    if (x.matches){
      swipeLeftAnimation();
      swipeRightAnimation();
    } else {
      swipeTopAnimation();
    }
  }

  let x = window.matchMedia("(max-width: 600px)");
  animationResponsive(x);

  x.addEventListener("change", () => {
    animationResponsive(x);
  })

  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
    
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    
      }  else {
    
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    
      }
    })
  }
  
  window.addEventListener('scroll', scrollActive);


const taskDetailList = document.querySelectorAll('.list-task-detail .dropdown-menu');
const activityDetailsList = document.querySelectorAll('.list-activity-details .dropdown-menu')
const btnWrapper = document.querySelectorAll('.card-footer');

/* ---- OPEN TAB CONTENT --- */
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

const selectedValue = document.querySelector(".selected-value");

const openTab = (tabName) => {
  let strSelected = tabName.charAt(0).toUpperCase() + tabName.slice(1);
  for(tabLink of tabLinks){
    tabLink.classList.remove('active-tab-link');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('active-tab');
  }
  selectedValue.textContent = strSelected;
  experiencesSelect.classList.remove('active');
  event.currentTarget.classList.add('active-tab-link');
  document.getElementById(tabName).classList.add('active-tab');
  if(tabName == "work"){
    taskDetailList.forEach((list) => {
      list.classList.remove('active');
    })
  } else if(tabName == "volunteer"){
    activityDetailsList.forEach((list) => {
      list.classList.remove('active');
    })
  }
}

const optionLinks = document.querySelector('.select-dropdown li');

const experiencesSelect = document.querySelector(".experiences-select");
const selectBtn = document.querySelector(".select-button");



// add click event to select button
selectBtn.addEventListener("click", () => {
  // add/remove active class on the container element
  experiencesSelect.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

const openTaskDetailList = (listOrder) => {
  taskDetailList[listOrder].classList.toggle('active');
}

const openActivityDetailsList = (listOrder) => {
  activityDetailsList[listOrder].classList.toggle('active');
  btnWrapper[listOrder].classList.toggle('active');
}


const btnSendEmail = document.querySelector('.form-button button');


btnSendEmail.addEventListener('click', messageSuccess);

const inputNameFocus = () => {
  document.getElementById('name').focus();
}

const scndFace = document.querySelectorAll('.face2');
const openDetailSkills = (i) => {
  scndFace[i].classList.toggle('active');
}