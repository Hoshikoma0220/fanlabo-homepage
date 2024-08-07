// main/loadHeader.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('../main/header/index.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('header-placeholder');
            placeholder.innerHTML = data;

            // CSSを正しいパスで読み込む
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = '../main/header/index.css';
            document.head.appendChild(cssLink);

            // JSを正しいパスで読み込む
            const script = document.createElement('script');
            script.src = '../main/heder/index.js';
            document.body.appendChild(script);
        });
});