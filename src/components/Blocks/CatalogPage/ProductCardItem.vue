<template>
    <div class="catalog-item p-4" :id="productId" :class="ProductCardItemStyle">
        <div class="catalog-item__wrapper flex flex-col justify-between items-center">
            <div class="catalog-item-img mb-[5%]">
                <img :src="productImg_url" class="rounded-lg" alt="">
            </div>
            <div class="catalog-item-category mb-[5%]">{{ product }}</div>
            <div class="catalog-item-name font-bold mb-[5%]">{{ productName }}</div>
            <div class="catalog-item-price w-1/2 mb-[5%]">
                <router-link :to="{
                    name: 'ProductPage',
                    params: {
                        productId: productId,
                        // product: product,
                        // productCategory: productCategory,
                        // productImg_url: productImg_url,
                        // productGalery_url: productGalery_url,
                        // productName: productName,
                        // productDescription: productDescription,
                        // productPrice: productPrice,
                    }
                }">
                    <ButtonDarkGray :button-name="productPrice"></ButtonDarkGray>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonDarkGray from '../generalBlocks/ButtonsStyle/ButtonDarkGray.vue';

export default {
    name: "ProductCardItem",
    props: {
        productId: {
            type: String,
        },
        ProductCardItemStyle: {
            type: String,
        },
        productImg_url: {
            type: String,
            // default: "./assets/img/catalog/pendants/Rectangle.png",
        },
        product: {
            type: String,
            // default: "подвеска",
        },
        productImg_url: {
            type: Array,
        },
        productName: {
            type: String,
            // default: "D&G",
        },
        productDescription: {
            type: String,
            // default: "D&G",
        },
        productPrice: {
            type: String,
            // default: "1 400 $",
        },
    },
    data() {
        return {};
    },
    components: {
        ButtonDarkGray,
    }
}
</script>