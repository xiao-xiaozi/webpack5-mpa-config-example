import './petiteVue.scss'
import imagePath from '@/assets/images/20230308213724.png'
const petiteVue = require('petite-vue')


petiteVue.createApp({
    count: 0,
    imagePath,
    showImg: false,
    increment() {
        this.count++;
    }
}).mount()
