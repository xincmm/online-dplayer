/* global DPLAYER_VERSION */
import defaultApiBackend from './api.js';

export default (options) => {
    // default options
    const defaultOption = {
        container: options.element || document.getElementsByClassName('dplayer')[0],
        live: false,
        autoplay: false,
        theme: '#b7daff',
        loop: false,
        lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
        screenshot: false,
        hotkey: true,
        preload: 'metadata',
        volume: 0.7,
        apiBackend: defaultApiBackend,
        video: {},
        contextmenu: [],
        mutex: true,
        showEpisode: false, // 显示分集
        episodes: [
            { id: 39464, topicId: 3606, genre: 'video', index: 1, name: '第1集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/1.mp4' },
            { id: 39465, topicId: 3606, genre: 'video', index: 2, name: '第2集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/2.mp4' },
            { id: 39466, topicId: 3606, genre: 'video', index: 3, name: '第3集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/3.mp4' },
            { id: 39467, topicId: 3606, genre: 'video', index: 4, name: '第4集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/4.mp4' },
            { id: 39468, topicId: 3606, genre: 'video', index: 5, name: '第5集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/5.mp4' },
            { id: 39469, topicId: 3606, genre: 'video', index: 6, name: '第6集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/6.mp4' },
            { id: 39470, topicId: 3606, genre: 'video', index: 7, name: '第7集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/7.mp4' },
            { id: 39471, topicId: 3606, genre: 'video', index: 8, name: '第8集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/8.mp4' },
            { id: 39472, topicId: 3606, genre: 'video', index: 9, name: '第9集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/9.mp4' },
            { id: 39473, topicId: 3606, genre: 'video', index: 10, name: '第10集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/10.mp4' },
            { id: 39474, topicId: 3606, genre: 'video', index: 11, name: '第11集', path: 'http://202.119.245.12:8080/2019-12-23/想见 /11.mp4' },
            { id: 39475, topicId: 3606, genre: 'video', index: 12, name: 'ç¬¬12é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /12.mp4' },
            { id: 39652, topicId: 3606, genre: 'video', index: 13, name: 'ç¬¬13é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /13.mp4' },
            { id: 39653, topicId: 3606, genre: 'video', index: 14, name: 'ç¬¬14é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /14.mp4' },
            { id: 40200, topicId: 3606, genre: 'video', index: 15, name: 'ç¬¬15é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /15.mp4' },
            { id: 40199, topicId: 3606, genre: 'video', index: 16, name: 'ç¬¬16é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /16.mp4' },
            { id: 40789, topicId: 3606, genre: 'video', index: 17, name: 'ç¬¬17é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /17.mp4' },
            { id: 40790, topicId: 3606, genre: 'video', index: 18, name: 'ç¬¬18é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /18.mp4' },
            { id: 41654, topicId: 3606, genre: 'video', index: 19, name: 'ç¬¬19é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /19.mp4' },
            { id: 41655, topicId: 3606, genre: 'video', index: 20, name: 'ç¬¬20é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /20.mp4' },
            { id: 41784, topicId: 3606, genre: 'video', index: 21, name: 'ç¬¬21é', path: 'http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /21.mp4' },
            { id: 41785, topicId: 3606, genre: 'video', index: 22, name: 'ç¬¬22é', path: 'http://202.119.245.12:8080/2019-12-23/想见你/22.mp4' },
            { id: 41826, topicId: 3606, genre: 'video', index: 23, name: '第23集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/23.mp4' },
            { id: 41827, topicId: 3606, genre: 'video', index: 24, name: '第24集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/24.mp4' },
            { id: 42060, topicId: 3606, genre: 'video', index: 25, name: '第25集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/25.mp4' },
            { id: 42061, topicId: 3606, genre: 'video', index: 26, name: '第26集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/26.mp4' },
            { id: 42062, topicId: 3606, genre: 'video', index: 27, name: '第27集', path: 'http://202.119.245.12:8080/2019-12-23/想见你/27.mp4' },
        ], // 集列表
        currentEpisode: 0, // 当前集数
        pluginOptions: { hls: {}, flvjs: {}, dash: {}, webtorrent: {} },
    };
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }
    if (options.video) {
        !options.video.type && (options.video.type = 'auto');
    }
    if (typeof options.danmaku === 'object' && options.danmaku) {
        !options.danmaku.user && (options.danmaku.user = 'DIYgod');
    }
    if (options.subtitle) {
        !options.subtitle.type && (options.subtitle.type = 'webvtt');
        !options.subtitle.fontSize && (options.subtitle.fontSize = '20px');
        !options.subtitle.bottom && (options.subtitle.bottom = '40px');
        !options.subtitle.color && (options.subtitle.color = '#fff');
    }

    if (options.video.quality) {
        options.video.url = options.video.quality[options.video.defaultQuality].url;
    }

    if (options.lang) {
        options.lang = options.lang.toLowerCase();
    }

    options.contextmenu = options.contextmenu.concat([
        {
            text: 'Video info',
            click: (player) => {
                player.infoPanel.triggle();
            },
        },
        {
            text: 'About author',
            link: 'https://diygod.me',
        },
        {
            text: `DPlayer v${DPLAYER_VERSION}`,
            link: 'https://github.com/MoePlayer/DPlayer',
        },
    ]);

    return options;
};
