<template>
<div>
    <a href="tel:0487883286">
        <div class="gray-btn bg-gray-800 hover:bg-gray-700 mx-auto text-center px-2 md:px-4 py-4 my-6 md:my-10 duration-300 transition">
            <i class="fas fa-phone"></i> ご予約はこちらから
        </div>
    </a>
</div>
</template>

<script>
export default {
    name: 'ReservationButton',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.gray-btn {
    border-radius: 9999px;
    width: 280px;
}
</style>
