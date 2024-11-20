const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoUrl = item.getAttribute('data-video-url');
        const videoPlayer = document.querySelector('#video-player video');
        videoPlayer.src = videoUrl;
        videoPlayer.play();
    });
});
