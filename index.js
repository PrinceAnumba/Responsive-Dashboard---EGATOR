const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close");
const themeToggler = document.querySelector(".theme-toggler");

// Show Side Bar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
} )
// Close Side Bar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
} )

// change Theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
} )
