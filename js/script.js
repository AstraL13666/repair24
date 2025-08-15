// Определение основного функционала переключения тем
function setupTheme() {
    // Всегда устанавливаем светлую тему при загрузке
    document.documentElement.setAttribute('data-theme', 'light');
    
    // Устанавливаем иконку луны для светлой темы
    updateThemeIcons('light');
    
    // Сохраняем начальную тему в localStorage
    localStorage.setItem('theme', 'light');
}

// Обновление иконок в зависимости от темы
function updateThemeIcons(theme) {
    // Находим оба элемента с иконками
    const headerThemeIcon = document.getElementById('themeIcon');
    const navBarThemeIcon = document.getElementById('themeIconUse');
    
    // Определяем какую иконку использовать
    const iconId = theme === 'light' ? 'theme-moon' : 'theme-sun';
    
    // Обновляем иконки в обоих местах
    if (headerThemeIcon) {
        headerThemeIcon.querySelector('use').setAttribute('href', `assets/svg/sprite.svg#${iconId}`);
    }
    
    if (navBarThemeIcon) {
        navBarThemeIcon.querySelector('use').setAttribute('href', `assets/svg/sprite.svg#${iconId}`);
    }
}

// Функция переключения темы
function toggleTheme() {
    // Получаем текущую тему
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Определяем новую тему
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Устанавливаем новую тему
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Обновляем иконки
    updateThemeIcons(newTheme);
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', newTheme);
}

// Запускаем инициализацию темы при загрузке страницы
document.addEventListener('DOMContentLoaded', setupTheme);


let currentSlide = 0;
let currentRepairSlide = 0;

(() => {
    const slider = document.getElementById('sliderContent');
    const slides = slider.children;
    let index = 0;

    const move = step => {
        index = (index + step + slides.length) % slides.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    };

    // nav buttons
    document.querySelector('#sliderNav .prev').onclick = () => move(-1);
    document.querySelector('#sliderNav .next').onclick = () => move(1);

    // auto-play (optional)
    setInterval(() => move(1), 4000);
})();

const navBar = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    navBar.classList.toggle('show', window.scrollY > 100);
});