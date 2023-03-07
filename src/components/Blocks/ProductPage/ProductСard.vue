<template>
    <section>
        <content>
            <div class="product-card-block font-sans font-thin tracking-tight text-xl">
                <div class="product-card__wrapper flex flex-row justify-between">
                    <div class="product-card-galery basis-[45%]">
                        <PhotoGaleryBlock :imagesUrl="product.productGalery_url"></PhotoGaleryBlock>
                    </div>
                    <div class="product-card-information basis-1/2 border-[0.1rem] p-[1%]">
                        <div
                            class="product-card-information__wrapper border-[0.1rem] p-[5%] h-full flex flex-col justify-between">
                            <!-- BULKA SHWABRA ABRIKOS -->
                            <div class="title basis-[5%] font-semibold text-lg tracking-widest uppercase">{{
                                product.productName }} {{ product.product }}</div>
                            <div class="additional-inform basis-[5%] text-[#ccc] text-sm w-2/3">
                                <div class="additional-inform__wrapper flex flex-row justify-between">
                                    <!-- <div v-if="product">
                                        {{ product.productId }}
                                    </div> -->
                                    <div class="additional-inform-item">category: {{ product.productCategory }}</div>
                                    <div class="additional-inform-item">brand: {{ product.productName }}</div>
                                </div>
                            </div>
                            <hr>
                            <div class="description basis-[50%] text-sm xl:text-lg">
                                <p>{{ product.productDescription }}</p>
                            </div>
                            <div class="price basis-[5%] font-semibold text-lg tracking-widest">
                                {{ product.productPrice }}
                            </div>
                            <div class="buttons basis-[5%] w-4/5">
                                <div class="buttons__wrapper flex flex-row justify-between">
                                    <div class="buttons-item buttons-item basis-1/3">
                                        <ButtonDarkGray button-name="buy"></ButtonDarkGray>
                                    </div>
                                    <div class="buttons-item buttons-item basis-1/2">
                                        <ButtonWhite button-name="add to cart"></ButtonWhite>
                                    </div>
                                </div>
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
import ButtonWhite from '../generalBlocks/ButtonsStyle/ButtonWhite.vue';
import PhotoGaleryBlock from './PhotoGaleryBlock.vue';
import { products } from '@/database-mock';

export default {
    name: "ProductСard",
    components: {
        PhotoGaleryBlock,
        ButtonDarkGray,
        ButtonWhite
    },
    props: {
        productId: {
            type: String,
            // required: true, 
            default: null,
        }
    },
    data() {
        return {

        }
    },
    computed: {
        product() {
            console.log(products.find(product => product.productId = this.productId));
            return products.find(product => product.productId = this.productId)

        }
    }
}
</script>
<style scoped lang="scss"></style>