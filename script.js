const btnToggle = document.getElementById('btn-toggle');
const lineToggle = document.querySelectorAll('.line');
const menuResponsive = document.getElementById('menu-list_responsive');

btnToggle.addEventListener('click', ()=>{
    lineToggle.forEach(x => x.classList.toggle('toggle-line_cruz'));
    menuResponsive.classList.toggle('link-menu_responsive-visible');
});