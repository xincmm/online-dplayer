class Pip {
    constructor(options, template, video) {
        this.options = options;
        this.template = template;
        this.video = video;
        if (this.options.pip) {
            this.template.pipButton.addEventListener('click', () => {
                if (!document.pictureInPictureElement) {
                    // 开启
                    this.template.video.requestPictureInPicture().catch((error) => {
                        console.log(error, 'Video failed to enter Picture-in-Picture mode.');
                    });
                } else {
                    // 关闭
                    document.exitPictureInPicture().catch((error) => {
                        console.log(error, 'Video failed to leave Picture-in-Picture mode.');
                    });
                }
            });
        }
    }
}

export default Pip;
