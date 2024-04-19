function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // "open" in css
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
