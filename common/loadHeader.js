document.addEventListener("DOMContentLoaded", function() {
    fetch('../main/header/index.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('header-placeholder');
            placeholder.innerHTML = data;

            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = '../main/header/index.css';
            document.head.appendChild(cssLink);

            const script = document.createElement('script');
            script.src = '../main/header/index.js';
            document.body.appendChild(script);
        });
});