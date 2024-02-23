window.onload = function () {
    setTimeout(() => {
        // loaderを消す
        const loader = document.querySelector('.loader');
        loader.remove();

        // Allcontent を見せる
        const content = document.querySelector('.Allcontent');
        content.style.display = 'block';

        // display:flexプロパティをblockに
        let el = document.querySelector('body');
        el.style.display='block';
        // bodyのheightをロード完了時に100vhから100%に変更する
        let bodySize = document.querySelector('body');
        bodySize.style.height='100%';

    }, 1300);
}
