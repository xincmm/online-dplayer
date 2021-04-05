class Speed {
    constructor(player) {
        this.player = player;

        this.showSpeed = false;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });

        this.player.template.speedButton.addEventListener('click', () => {
            if (this.showSpeed) {
                this.hide();
                this.showSpeed = false;
            } else {
                this.show();
                this.showSpeed = true;
            }
        });

        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].addEventListener('click', () => {
                const speed = this.player.template.speedItem[i].dataset.speed;
                this.removeActive();
                this.player.template.speedItem[i].classList.add('dplayer-speed-item-active');
                this.player.speed(speed);
                this.hide();
            });
        }
    }

    hide() {
        this.player.template.speed.classList.remove('dplayer-speed-open');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.controller.disableAutoHide = false;
        this.showSpeed = false;
    }

    show() {
        this.player.template.speed.classList.add('dplayer-speed-open');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.controller.disableAutoHide = true;
    }

    removeActive() {
        for (let i = 0; i < this.player.template.speedItem.length; i++) {
            this.player.template.speedItem[i].classList.remove('dplayer-speed-item-active');
        }
    }
}

export default Speed;
