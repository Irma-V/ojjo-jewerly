<template>
    <!-- <div class="test-div w-[50%]"> -->
    <div class="about-card__photo-gallery pb-8 lg:pb-0">
        <div class="photo-gallery-block">
            <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full">

                <!-- <div class="photo-gallery__large-image flex basis-4/5 pb-[2%]">
                    <img ref="largeImg" class="large-image__wrapper object-cover w-full rounded-sm" id="largeImg"
                        :src="item.productImg_url" alt="Image">
                </div> -->
                <div class="photo-gallery__large-image flex basis-4/5 pb-[2%]">
                    <img class="large-image__wrapper object-cover w-full rounded-sm" :src="selectedImage" alt="Image">
                </div>

                <ul class="photo-gallery__thumbs  flex flex-row justify-between  basis-1/5" id="thumbs">

                    <!-- <li v-for="i in item.productGalery_url" :key="i" @click="selectImage(i)">
                        <img :src="i" class="rounded-sm">
                    </li> -->
                    <li v-for="item in imagesUrl" :key="item"  @click="selectImage(item)">
                        <img :src="item" class="rounded-sm">
                    </li>
                </ul>

            </div>
        </div>

    </div>
    <!-- </div> -->
</template>

<script>
// import { products } from '@/database-mock';

// import { startPageGalery } from '@/database-mock';

export default {
    name: "PhotoGaleryBlock",
    components: {

    },
    props: {
        selectedImage: {
            type: String,
        },
        imagesUrl: {
            type: Array,
            default: [],
        }
    },

    data() {
        return {
            selectedImage: '',
        }
    },
    created() {
        this.selectedImage = this.imagesUrl[0]
        console.log( this.selectedImage );
    },
    methods: {
        selectImage(newlink) {
            console.log(newlink);
            this.selectedImage = newlink
        },
    },
}
</script>

<style scoped lang="scss">
.photo-gallery__wrapper {
    .photo-gallery__thumbs {

        li {
            list-style: none;
            margin: 0 1rem 0 0;

            &:last-child {
                margin: 0 0 0 0;
            }
        }
    }
}
</style>