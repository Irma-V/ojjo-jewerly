<template>
    <section>
        <content>
            <TitleBlock title="Products You May Like" description="We've got something else for you"></TitleBlock>
            <div class="catalog-block pb-[3.25rem] font-sans font-thin tracking-tight text-base">
                <!-- <div class="catalog__wrapper flex flex-row justify-between"> -->
                <agile :slidesToShow="3" :infinite="true" :navButtons="false" :autoplay="true" :autoplaySpeed="5000">
                    <ProductCardItem v-for="product in products" :key="product" :product-id="product.productId"
                        :product-img_url="product.productImg_url" :product="product.product"
                        :product-name="product.productName" :product-price="product.productPrice"></ProductCardItem>
                </agile>
                <!-- </div> -->
            </div>
        </content>
    </section>
</template>
<script>
import TitleBlock from '../generalBlocks/TitleBlock.vue';
import { products } from '@/database-mock';
import ProductCardItem from '../CatalogPage/ProductCardItem.vue';
import { VueAgile } from 'vue-agile'

export default {
    name: "ProductOffers",
    components: {
        TitleBlock,
        ProductCardItem,
        agile: VueAgile
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