<template>
    <section>
        <content>
            <div class="catalog-block pb-[3.25rem] font-sans font-thin tracking-tight text-base">
                <div class="catalog__wrapper flex flex-row flex-wrap justify-between items-center">
                    <div v-for="product in products" :key="product" class="catalog-item basis-1/3 p-4" :id="product.productId">
                        <div class="catalog-item__wrapper flex flex-col justify-between items-center">
                            <div class="catalog-item-img mb-[5%]">
                                <img :src="product.productImg_url" class="rounded-lg" alt="">
                            </div>
                            <div class="catalog-item-category mb-[5%]">{{ product.product }}</div>
                            <div class="catalog-item-name font-bold mb-[5%]">{{ product.productName }}</div>
                            <div class="catalog-item-price w-1/2 mb-[5%]">
                                <ButtonDarkGray :button-name="product.productPrice"></ButtonDarkGray>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="load-more flex justify-center">
                <div class="load-more__wrapper w-1/4">
                    <ButtonDarkGray button-name="Load More"></ButtonDarkGray>
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
<style scoped lang="scss">
</style>