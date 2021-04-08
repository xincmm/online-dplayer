class Speed {
    constructor(player) {
        this.player = player;

        this.player.template.speed.addEventListener('mouseover', () => {
            this.show();
        });

        this.player.template.speed.addEventListener('mouseleave', () => {
            this.hide();
        });

        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].addEventListener('click', () => {
                const speed = this.player.template.speedItem[i].dataset.speed;
                this.player.notice(`速度：${speed}倍`);
                this.removeActive();
                this.player.template.speedItem[i].classList.add('dplayer-speed-item-active');
                this.player.speed(speed);
                this.hide();
            });
        }
    }

    hide() {
        this.player.template.speed.classList.remove('dplayer-speed-open');
        this.player.controller.disableAutoHide = false;
    }

    show() {
        this.player.template.speed.classList.add('dplayer-speed-open');
        this.player.controller.disableAutoHide = true;
    }

    removeActive() {
        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].classList.remove('dplayer-speed-item-active');
        }
    }
}

export default Speed;
