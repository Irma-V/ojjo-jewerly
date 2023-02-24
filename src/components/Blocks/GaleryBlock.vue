<template>
    <section>
        <content>
            <TitleBlock title="We're on social media" description="#ojjo_jewerly"></TitleBlock>
            <div class="start-page-galery">
                <div class="start-page-galery__wrapper grid grid-cols-4">
                    <div class="start-page-galery-item h-[18.75rem] overflow-hidden grid_a">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_01.png" class="w-full h-wull object-cover"
                            alt="">
                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_b">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_02.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_c">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_03.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_d">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_04.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_e">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_05.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_f">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_06.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    
                    <div class="start-page-galery-item h-[18.75rem] overflow-hidden grid_a">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_01.png" class="w-full h-wull object-cover"
                            alt="">
                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_b">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_02.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_c">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_03.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_d">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_04.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_e">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_05.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    <div class="start-page-galery-item h-[18.75rem] grid_f">
                        <img src="~@/assets/img/startPageGalery/gallery__image_x1_06.png" class="w-full h-wull object-cover"
                            alt="">

                    </div>
                    
                </div>
            </div>
        </content>
    </section>
</template>
<script>
import TitleBlock from './TitleBlock.vue';

export default {
    name: "GaleryBlock",
    components: {
        TitleBlock
    },
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
.start-page-galery-item {
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

// для растянутых
.odd-line {
    grid-column: 1/3;
}
.even-line {
    grid-column: 3/5;
}
</style>