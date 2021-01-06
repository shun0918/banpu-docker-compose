<template>
<div>
    <head-navigation />
    <router-view />
    <foot-navigation />
</div>
</template>

<script>
import HeadNavigation from './components/Header'
import FootNavigation from './components/Footer'
export default {
    name: 'app',
    components: {
        HeadNavigation,
        FootNavigation,
    },
    watch: {
        '$route' (to, from) {
            if(to.meta.title)
                this.$util.createPageTitle(to.meta.title);
        }
    }
}
</script>

<style lang="scss">
@import '../public/css/tailwind.css';

.text-orange {
    color: #ffa000;
}

.bg-orange {
    background-color: #ffa000;
}

.hover\:bg-orange:hover {
    background-color: #ffa000;
}

.header-padding-top {
    padding-top: 75px;
}

.container {
    margin-left: auto;
    margin-right: auto;
    padding: 0 2%;
}

#app {
    // padding-top: 75px;
    padding-bottom: 75px;
}
</style>
