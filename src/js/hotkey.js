class HotKey {
    constructor(player) {
        if (player.options.hotkey) {
            document.addEventListener('keydown', (e) => {
                if (player.focus) {
                    const tag = document.activeElement.tagName.toUpperCase();
                    const editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        const event = e;
                        let percentage;
                        switch (event.code) {
                            case 'Space':
                                event.preventDefault();
                                player.toggle();
                                break;
                            case 'ArrowLeft':
                                event.preventDefault();
                                player.seek(player.video.currentTime - 5);
                                player.controller.setAutoHide();
                                break;
                            case 'ArrowRight':
                                event.preventDefault();
                                player.seek(player.video.currentTime + 5);
                                player.controller.setAutoHide();
                                break;
                            case 'ArrowUp':
                                event.preventDefault();
                                percentage = player.volume() + 0.1;
                                player.volume(percentage);
                                break;
                            case 'ArrowDown':
                                event.preventDefault();
                                percentage = player.volume() - 0.1;
                                player.volume(percentage);
                                break;
                        }
                    }
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'Escape':
                    if (player.fullScreen.isFullScreen('web')) {
                        player.fullScreen.cancel('web');
                    }
                    break;
                case 'KeyF':
                    if (player.fullScreen.isFullScreen('browser')) {
                        player.fullScreen.cancel('browser');
                    } else {
                        player.fullScreen.request('browser');
                    }
            }
        });
    }
}

export default HotKey;
