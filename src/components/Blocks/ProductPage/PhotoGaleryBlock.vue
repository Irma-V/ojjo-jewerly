<template>
    <!-- <div class="test-div w-[50%]"> -->
    <div v-for="item in productInform" :key="item" class="about-card__photo-gallery pb-8 lg:pb-0">
        <div class="photo-gallery-block" :id="item.productId">
            <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full lg:h-[42rem]">

                <div class="photo-gallery__large-image flex basis-4/5 pb-[2%]">
                    <img ref="largeImg" class="large-image__wrapper object-cover w-full rounded-lg" id="largeImg"
                        src="~@/assets/img/catalog/pendants/Rectangle01.png" alt="Image">
                </div>

                <ul class="photo-gallery__thumbs  flex flex-row justify-between  basis-1/5" id="thumbs">

                    <li v-for="i in item.productGalery_url" :key="i" @click="selectImage(i)">
                        <img :src="i">
                    </li>
                    <!-- <li>
                        <img src="~@/assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery01.png">
                    </li>
                    <li>
                        <img src="~@/assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery02.png">
                    </li> -->
                </ul>

            </div>
        </div>

    </div>
    <!-- </div> -->
</template>

<script>
// import { products } from '@/database-mock';

export default {
    name: "PhotoGaleryBlock",
    components: {

    },
    props: {

    },

    data() {
        return {
            productInform: [
                {
                    productId: "pendant01",
                    product: "pendant",
                    productCategory: "pendants",
                    productImg_url: require('../../../assets/img/catalog/pendants/Rectangle01.png'),
                    // productImg_url: '~@/assets/img/catalog/pendants/Rectangle01.png ',
                    productGalery_url: [
                        require('../../../assets/img/catalog/pendants/Rectangle01.png'),
                        require('../../../assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery01.png'),
                        require('../../../assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery02.png'),
                        // '~@/assets/img/catalog/pendants/Rectangle01.png ',
                        // '~@/assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery01.png ',
                        // '~@/assets/img/catalog/pendants/Rectangle01_for_galery/Rectangle01_for_galery02.png ',
                    ],
                    productName: "Dolce & Gabanna",
                    productPrice: "1 400 $",

                },
            ],
        }
    },
    methods: {
        selectImage(newlink) {
            // console.log(this.$refs.largeImg.src);
            let currentLink = document.querySelector(".large-image__wrapper").src
            console.log("в начале: " + currentLink + " и новая ссылка: " + newlink);
            currentLink = newlink
            console.log("результат: " + currentLink);
            return currentLink
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