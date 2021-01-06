<template>
<div class="top-fixed bg-black bg-opacity-50">
    <div class="container">
        <div class="flex flex-wrap justify-between items-center">
            <div class="logo">
                <img src="/img/logo.png" class="header-logo-img" />
            </div>
            <div class="sp-icon md:hidden">
                <a href="tel:0487883286">
                    <i class="fas fa-phone"></i>
                    <span class="text-sm">ご予約はこちらから</span>
                </a>
            </div>
            <div class="text-center w-1/3 ml-auto hidden md:flex flex-wrap justify-between">
                <div class="telw-full md:block">
                    <a href="tel:0487883286">
                        <i class="fas fa-phone"></i>
                    </a>
                    <p class="text-sm">TEL</p>
                </div>
                <div class="insta md:block">
                    <a href="https://www.instagram.com/banpoo788/">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <p class="text-sm">INSTAGRAM</p>
                </div>
                <div class="access md:block">
                    <a href="#access">
                        <i class="fas fa-map-marker-alt"></i>
                    </a>
                    <p class="text-sm">ACCESS</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-fixed {
    width: 100%;
    height: 75px;
    z-index: 10;
    top: 0px;
    position: fixed;
    padding: 0 3%;
}

.logo {
    width: 100px;
}

.header-logo-img {
    width: 100px;
    height: 75px;
}

i {
    color: #fff;
    font-size: 20px;
    padding-top: 8px;
}

@media screen and (min-width: 768px) {
    .logo {
        width: 120px;
    }
}
</style>
