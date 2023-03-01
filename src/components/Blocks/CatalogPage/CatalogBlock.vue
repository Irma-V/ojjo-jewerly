<template>
    <section>
        <content>
            <div class="catalog-block">
                <div class="catalog__wrapper flex flex-row flex-wrap justify-between items-center font-sans font-thin tracking-tight text-base">
                    <div class="catalog-item basis-1/3 p-4">
                        <div class="catalog-item__wrapper flex flex-col justify-between items-center">
                            <div class="catalog-item-img mb-[5%]">
                                <img src="~@/assets/img/catalog/pendants/Rectangle.png" class="rounded-lg" alt="">
                            </div>
                            <div class="catalog-item-category mb-[5%]">pendant</div>
                            <div class="catalog-item-name font-bold mb-[5%]">Dolce & Gabanna</div>
                            <div class="catalog-item-price w-1/2 mb-[5%]">
                                <ButtonDarkGray button-name="1 400 $"></ButtonDarkGray>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </content>
    </section>
</template>
<script>
import ButtonDarkGray from '../generalBlocks/ButtonsStyle/ButtonDarkGray.vue';
import { products } from '@/database-mock';

export default {
    name: "CatalogBlock",
    components: {
    ButtonDarkGray
},
    props: {

    },
    data() {
        return {
            products: products,
        }
    }
}
</script>
<style scoped lang="scss"></style>