const btnToggle = document.getElementById('btn-toggle');
const lineToggle = document.querySelectorAll('.line');
const menuResponsive = document.getElementById('menu-list_responsive');
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

btnToggle.addEventListener('click', ()=>{
    lineToggle.forEach(x => x.classList.toggle('toggle-line_cruz'));
    menuResponsive.classList.toggle('link-menu_responsive-visible');
});


/* <-- Seccion de los temas de la pag --> */

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle("light");
    if(toggleIcon.src.includes("Imagenes/moon-dark.svg")){
        toggleIcon.src = 'Imagenes/mode-sun.svg';
        toggleText.textContent = 'Light Mode';
    }else{
        toggleIcon.src = 'Imagenes/moon-dark.svg';
        toggleText.textContent = 'Dark Mode';
    }
})