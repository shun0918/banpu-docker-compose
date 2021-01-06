<template>
<div>
    <section class="top">
        <div class="top-bg relative">
            <img src="img/menu_moka.jpg" class="top-image opacity-50 w-full" />
            <div class="container">
                <div class="title p-2 text-shadow text-2xl md:text-4xl lg:text-6xl">
                    <p>大宮の隠れ家で、</p>
                    <p>ひっそりと、呑む。</p>
                </div>
            </div>
        </div>
    </section>

    <section class="my-12">
        <div class="container">
            <div class="bg-white text-black py-4 rounded-lg">
                <div class="p-4">
                    <p class="text-center text-xl md:text-3xl font-semibold">
                        新着情報
                    </p>
                    <!-- 繰り返しスタート -->
                    <div class="py-2">
                        <router-link to="/news/1" tag="div">
                            <div class="py-2 duration-300 transition-opacity hover:bg-gray hover:opacity-50">
                                <p class="text-md">2020.10/10</p>
                                <p class="text-md">番風WEBサイト開設しました。</p>
                                <hr class="text-white" />
                            </div>
                        </router-link>
                    </div>
                    <!--
                    <div class="news-list-btn border border-black w-1/2 md:w-1/3 p-2 mt-2 mx-auto transition duration-300 hover:bg-gray-800 hover:text-white">
                        <router-link to="newsList">
                            <p class="text-center text-md md:text-xl">お知らせ一覧</p>
                        </router-link>
                    </div>
                    -->
                </div>
            </div>
        </div>
    </section>

    <!-- reservation-button -->
    <reservation-button />

    <section class="container mt-12">
        <div class="menu">
            <div class="title">
                <p class="text-xl md:text-3xl pl-2 font-bold">-人気メニュー-</p>
            </div>
            <!--slider start-->
            <slider />
        </div>
    </section>

    <section class="mt-12 container">
        <div class="cource mt-8">
            <div class="title">
                <p class="text-xl md:text-3xl pl-2 font-bold">-宴会コース-</p>
                <p>宴会コースは4名様から承ります。</p>
            </div>
            <div class="contents mt-2">
                <div class="border-orange p-4">
                    <p class="text-lg text-center font-bold">番風コース</p>
                    <p class="text-lg text-center font-bold">Banpu-course</p>
                    <br />
                    <p class="text-lg text-center">2時間半飲み放題</p>
                    <p class="text-sm text-center">
                        (プレミアムモルツ・神泡生ビール付)
                    </p>
                    <p class="text-center my-2">+</p>
                    <p class="text-lg text-center">
                        お料理
                        <span class="text-sm text-orange">※</span>
                    </p>
                    <ul class="text-center text-xs text-gray-400">
                        <li>~一例~</li>
                        <li>番風サラダ</li>
                        <li>オードブル(唐揚げや季節にあった揚げ物料理)</li>
                        <li>お刺身盛り合わせ</li>
                        <li>お客様に寄り添ったお料理(2-3種)</li>
                        <li>大将自慢のシメ料理(ご飯物・麺類)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-12">
        <div class="info container">
            <div class="my-4" id="access">
                <p class="text-xl md:text-3xl my-2 font-bold">-アクセス-</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.672790366014!2d139.61868241526489!3d35.90602878014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c143404fbaf7%3A0xa84387dcec08048c!2z57Sg6aOf5a62IOeVqumiqA!5e0!3m2!1sja!2sjp!4v1598180500928!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false" tabindex="0" class="map"></iframe>
                <hr class="my-4" />
                <div class="info-logo">
                    <img src="img/logo.jpg" width="150" class="mx-auto" />
                </div>
                <div class="text-sm p-2">
                    <p>〒330-0854</p>
                    <p class="py-1">埼玉県さいたま市大宮区桜木町4-4-24 ビル3F</p>
                    <p class="text-sm text-gray-400">
                        大宮駅西口から徒歩2分/ソニックシティ前の公園からすぐ
                    </p>
                    <p class="text-sm text-gray-400">
                        来来軒が目印で、その隣のビルになります！
                    </p>
                </div>
                <hr class="my-4" />
            </div>
        </div>
    </section>
</div>
</template>

<script>
import ReservationButton from '../components/base/ReservationButton'
import Slider from '../components/base/Slider'
export default {
    name: 'Top',
    components: {
        ReservationButton,
        Slider,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss">
body {
    background: black;
    color: white;
    margin: 0;
    font-family: 'Noto Serif JP', 'YuMincho', 'Yu Mincho', 'ヒラギノ明朝 ProN',
        'Hiragino Mincho ProN', serif;
    letter-spacing: 1.5px;
}

.text-shadow {
    text-shadow: 0 0 0.3em rgb(0, 0, 0);
}

.blur {
    -ms-filter: blur(4px);
    filter: blur(4px);
}

.container {
    margin-left: auto;
    margin-right: auto;
}

.top {
    .title {
        position: absolute;
        bottom: 3%;
        right: 3%;
    }
}

.top-image {
    object-fit: cover;
    height: 80vh;
}

.text-orange {
    color: rgb(255, 160, 0);
}

.shadow img:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}

.border-orange {
    border: 1px solid #ffba00;
}

.map {
    width: 100%;
    height: 60vh;
}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 1024px) {}
</style>
