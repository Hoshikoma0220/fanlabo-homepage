document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.getElementById('main-title');
    let isScrolling;

    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            if (window.scrollY === 0) {
                mainTitle.style.opacity = '0'; 
                setTimeout(() => {
                    mainTitle.style.display = 'none';
                }, 1000); 
            } else {
                mainTitle.style.display = 'block'; 
                setTimeout(() => {
                    mainTitle.style.opacity = '1'; 
                }, 10); 
            }
        }, 50); 
    });
});