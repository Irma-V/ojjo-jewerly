<template>
    <section>
        <content>
            <div class="catalog-block pb-[3.25rem] font-sans font-thin tracking-tight text-base">
                <div class="catalog__wrapper flex flex-row flex-wrap justify-between items-center">
                    <ProductCardItem ProductCardItemStyle="basis-1/3" v-for="product in products" :key="product" :product-id="product.productId" :product-img_url="product.productImg_url" :product="product.product" :product-name="product.productName" :product-price="product.productPrice"></ProductCardItem>
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
import ProductCardItem from './ProductCardItem.vue';

export default {
    name: "CatalogBlock",
    components: {
    ButtonDarkGray,
    ProductCardItem
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