<template>
    <section>
        <content>
            <TitleBlock title="The best tips for choosing expensive gifts" description="Helpful News"></TitleBlock>
            <div class="news-block font-thin text-xl text-white">
                <ul class="news-block__wrapper grid grid-cols-3 gap-4 justify-center mb-[3.25rem]">
                    <li v-for="article in newsArticles" :key="article" class="news-article w-full h-[23.125rem]"  :class="article.bgImg" :id="article.id">
                        <div class="gray-gradient w-full h-full flex justify-center items-end py-[5%]">
                           <h1 class="w-1/2 text-center">{{ article.text }}</h1>
                        </div>
                    </li>

                    <!-- <li class="news-article w-full h-[23.125rem]">
                        <h1 class="gray-gradient w-full h-full flex justify-center items-end py-[3%]"></h1>
                    </li>
                    <li class="news-article w-full h-[23.125rem]">
                        <h1 class="gray-gradient w-full h-full flex justify-center items-end py-[3%]"></h1>
                    </li> -->
                </ul>
                <div class="btn w-1/4 m-auto">
                    <ButtonDarkGray button-name="read our blog"></ButtonDarkGray>
                </div>
            </div>
        </content>
    </section>
</template>
<script>
import ButtonDarkGray from './ButtonsStyle/ButtonDarkGray.vue';
import TitleBlock from './TitleBlock.vue';
import { newsArticles } from '@/database-mock';


export default {
    name: "NewsBlock",
    components: {
        TitleBlock,
        ButtonDarkGray
    },
    props: {

    },
    data() {
        return {
            newsArticles: newsArticles,
        }
    }
}
</script>
<style scoped lang="scss">
// section {
// content {
.news-block {
    .news-block__wrapper {
        .news-article {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

}

// }
// }
</style>