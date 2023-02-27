<template>
    <section>
        <content>
            <div class="about-it-block px-[10%]  font-sans font-thin tracking-tight text-xl">
                <div class="about-it__wrapper flex flex-row-reverse justify-between">
                    <div class="about-it-title basis-1/3">
                        <div class="about-it-title__wrapper flex flex-row flex-wrap justify-between items-center">
                            <div v-for="service in aboutServiceNews" :key="service" class="about-it-title-item p-[2%] basis-2/4">
                                <div class="flex flex-col items-center">
                                    <img :src="service.svg_url" class="w-[4.375rem] h-[4.375rem]" alt="" @click="selectServiceNews(service)">
                                    <span class="title-name w-1/2 text-center">{{ service.title }}</span>
                                </div>
                            </div>

                            <!-- <div class="about-it-title-item p-[2%] basis-2/4">
                                <div class="flex flex-col items-center">
                                    <img src="~@/assets/img/svg/designe.svg" class="w-[4.375rem] h-[4.375rem]" alt="">
                                    <span class="title-name w-1/2 text-center">individual designe</span>
                                </div>
                            </div>
                            <div class="about-it-title-item p-[2%] basis-2/4">
                                <div class="flex flex-col items-center">
                                    <img src="~@/assets/img/svg/fitting.svg" class="w-[4.375rem] h-[4.375rem]" alt="">
                                    <span class="title-name w-1/2 text-center">free fitting</span>
                                </div>
                            </div>
                            <div class="about-it-title-item p-[2%] basis-2/4">
                                <div class="flex flex-col items-center">
                                    <img src="~@/assets/img/svg/jewerly.svg" class="w-[4.375rem] h-[4.375rem]" alt="">
                                    <span class="title-name w-1/2 text-center">individual approach</span>
                                </div>
                            </div> -->

                        </div>
                    </div>
                    <div class="about-it-description basis-3/5">
                        <HideAndShowContent :showHeight="showHeight" hideAndShowStyle="flex flex-col justify-between"
                            ShowMoreButtonStyle="uppercase text-xl tracking-widest py-[0.5rem]  border-b-[0.18rem] border-dashed border-black"
                            v-for="descriptionItem in aboutServiceNews" :key="descriptionItem">

                            <template v-slot:mainContent>
                                {{ descriptionItem.description }}
                            </template>

                            <template v-slot:ShowMoreButton>
                                Read completely
                            </template>
                        </HideAndShowContent>
                    </div>

                </div>
            </div>

        </content>
    </section>
</template>
<script>
import HideAndShowContent from '../Blocks/generalBlocks/HideAndShowContent.vue';
import { aboutServiceNews } from '@/database-mock';


export default {
    name: "AboutItBlock",
    components: {
        HideAndShowContent

    },
    props: {

    },
    data() {
        return {
            showHeight: 15,
            aboutServiceNews:aboutServiceNews,
        }
    }
}
</script>
<style scoped lang="scss"></style>