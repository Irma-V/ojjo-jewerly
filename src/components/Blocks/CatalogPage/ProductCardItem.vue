<template>
    <div class="catalog-item p-4" :id="productId" :class="ProductCardItemStyle">
        <div class="catalog-item__wrapper flex flex-col justify-between items-center">
            <div class="catalog-item-img mb-[5%]">
                <img :src="productImg_url" class="rounded-lg" alt="">
            </div>
            <div class="catalog-item-category mb-[5%]">{{ product }}</div>
            <div class="catalog-item-name font-bold mb-[5%]">{{ productName }}</div>
            <div class="catalog-item-price w-1/2 mb-[5%]">
                <ButtonDarkGray :button-name="productPrice"></ButtonDarkGray>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonDarkGray from '../generalBlocks/ButtonsStyle/ButtonDarkGray.vue';

export default {
    name: "ProductCardItem",
    props: {
        ProductCardItemStyle: {
            type: String,
        },
        productId: {
            type: String,
            default: "pendant01",
        },
        productImg_url: {
            type: String,
            default: "./assets/img/catalog/pendants/Rectangle.png",
        },
        product: {
            type: String,
            default: "подвеска",
        },
        productName: {
            type: String,
            default: "D&G",
        },
        productPrice: {
            type: String,
            default: "1 400 $",
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