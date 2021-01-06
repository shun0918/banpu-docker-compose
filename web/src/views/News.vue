<template>
<div class="header-padding-top">
    <section class="my-12">
        <div class="container">
            <p class="text-3xl font-bold my-4">- 新着情報 -</p>
            <div class="bg-white w-full text-black p-8 rounded-lg">
                <p class="text-xl">{{ news.title }}</p>
                <p class="text-sm text-gray-700">{{ news.post_date }}</p>
                <hr class="my-2 text-gray-800" />
                <pre class="break-words w-full whitespace-pre-wrap text-sm">
                {{ news.content }}
                </pre>
                <div class="back-btn">
                    <router-link to="/">
                        <p class="text-orange text-xl text-center font-semibold hover:opacity-50 transition duration-300">
                            &lsaquo;戻る
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- reservation-button -->
    <reservation-button />
</div>
</template>

<script>
import ReservationButton from '../components/base/ReservationButton'
const NEWS = [{
    id: 1,
    post_date: '2020/11/01',
    title: '番風WEBサイト開設しました。',
    content: `
本WEBページをご覧いただきありがとうございます。
新型コロナウイルスの影響で、「居酒屋は感染しないか不安…」「そもそもお店が営業しているかわからない…」
といったご意見をいただきましたので、「番風WEBサイト」を開設しました。

番風は2020年で20周年を迎えますが、より多くの皆様に、「楽しいひと時」をお届けできるよう、
従業員一同、努力してまいります。

これからも、「番風」をよろしくお願いいたします。

from番風オーナー`,
}, ]
export default {
    name: 'News',
    components: {
        ReservationButton,
    },
    data() {
        return {
            newsList: NEWS,
            content: '',
        }
    },
    computed:{
        news: function() {
            return this.newsList.reduce(function (news) {
                if (news.id == id) return news
            })
        }
    },
    created() {
        this.$util.createPageTitle(this.news.title)
    },
    mounted() {
        this.$util.setHeadConfig({
            description: this.news.content
        });
    },
}
</script>

<style lang="scss"></style>
