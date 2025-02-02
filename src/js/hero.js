    let heroBlock = document.querySelector('.hero__block');
    let heroVideo = document.querySelector('.hero__video');
    let aroundContainer = document.querySelector('.around-container');
    let aroundContainerPaddingTop = window.getComputedStyle(aroundContainer).paddingTop;
    

    //Размеры видео в зависимости от экрана пользователя
    if(heroBlock) {
        heroBlock.style.minHeight = `calc(100svh - ${header.clientHeight}px - ${aroundContainerPaddingTop})`;
    }
    if(heroVideo) {
        heroVideo.style.minHeight = `calc(100svh - ${header.clientHeight}px - ${aroundContainerPaddingTop})`;
    }
     
