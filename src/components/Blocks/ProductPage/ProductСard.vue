<template>
    <section>
        <content>
            <div class="product-card-block">
                <div class="product-card__wrapper flex flex-row justify-between">
                    <div class="product-card-galery basis-1/2">
                        <PhotoGaleryBlock></PhotoGaleryBlock>
                    </div>
                    <div class="product-card-information basis-[45%]">
                        BULKA SHWABRA ABRIKOS
                    </div>
                </div>
            </div>
        </content>
    </section>
</template>

<script>
import PhotoGaleryBlock from './PhotoGaleryBlock.vue';

export default {
    name: "ProductСard",
    components: {
        PhotoGaleryBlock
    },
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss"></style>