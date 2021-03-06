class Episode {
    constructor(player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });

        this.player.events.on('fullscreen', () => {
            console.log('进入全屏');
            this.player.template.episodeButton.classList.add('dplayer-episode-icon-show');
        });

        this.player.events.on('fullscreen_cancel', () => {
            console.log('退出全屏');
            this.player.template.episodeButton.classList.remove('dplayer-episode-icon-show');
        });

        this.player.template.episodeButton.addEventListener('click', () => {
            this.show();
        });

        Array.prototype.slice.call(this.player.template.episodes).forEach((item, index) => {
            if (this.player.options.currentEpisode === index) {
                item.classList.add('episode-active');
            }
            item.addEventListener('click', () => {
                if (this.player.options.currentEpisode !== index) {
                    this.player.template.episodes[this.player.options.currentEpisode].classList.remove('episode-active');
                }
                this.player.events.trigger('episode_change', index);
                item.classList.add('episode-active');
                this.player.switchVideo(
                    {
                        url: this.player.options.episodes[index].path,
                    },
                    null,
                    index
                );
                this.hide();
            });
        });
    }

    hide() {
        this.player.template.episodeBox.classList.remove('dplayer-episode-box-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.episodeBox.classList.add('dplayer-episode-box-open');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }
}

export default Episode;
