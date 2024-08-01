const mainTitle = document.getElementById('main-title');
let isScrolling;

window.addEventListener('scroll', function() {
    clearTimeout(isScrolling);
    
    isScrolling = setTimeout(() => {
        if (window.scrollY === 0) {
            mainTitle.style.opacity = '0'; // フェードアウトを開始
            setTimeout(() => {
                mainTitle.style.display = 'none'; // フェードアウトが完了したら非表示にする
            }, 1000); // 1秒後にdisplayをnoneにする（CSSのtransition時間と一致）
        } else {
            mainTitle.style.display = 'block'; // 表示にする
            setTimeout(() => {
                mainTitle.style.opacity = '1'; // フェードインを開始
            }, 10); // displayをblockに設定した後、少し待ってからopacityを変更
        }
    }, 50); // スクロールイベントのデバウンス
});
