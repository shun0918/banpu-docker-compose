<template>
<div>
    <div class="slide-outer relative">
        <div class="slide-inner w-full absolute" v-for="(slide, index) in slides" :key="index">
            <transition name="fade" class="relative">
                <img v-if="currentSlide == index" class="slide-image" :src="slide.img" />
            </transition>
            <p v-if="currentSlide == index" class="text-center">
                -{{ slide.name }}-
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            currentSlide: 0,
            show: true,

            slides: [{
                    name: '絶品！しっとり鶏チャーシュー',
                    img: 'img/menus/menu_chashu.jpg',
                },
                {
                    name: '丸ごとトマト~夏~',
                    img: 'img/menus/menu_tomato.jpg',
                },
                {
                    name: '馬肉のユッケ',
                    img: 'img/menus/menu_yukke.jpg',
                },
            ],
        }
    },

    created() {
        this.$nextTick().then(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 3000)
        })
    },

    methods: {
        autoPlay() {
            if (this.currentSlide + 1 === this.slides.length) {
                this.currentSlide = 0
                return
            }
            this.currentSlide++
        },
    },
}
</script>

<style lang="scss" scoped>
.slide-outer,
.slide-inner {
    height: 40vh;
}

.slide-image {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
}

.fade-enter-active {
    transition: opacity 1s ease;
}

.fade-leave-active {
    transition: opacity 1s ease;
    position: absolute;
    z-index: 9999;
}

.fade-enter {
    opacity: 0;
}

.fade-leave-to {
    opacity: 0;
}

@media screen and (min-width: 1024px) {

    .slide-outer,
    .slide-inner {
        height: 576px;
    }
}
</style>
