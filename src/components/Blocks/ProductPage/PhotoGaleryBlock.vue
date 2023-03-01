<template>
    <!-- <div class="test-div w-[50%]"> -->
        <div class="about-card__photo-gallery pb-8 lg:pb-0">
            <div class="photo-gallery-block">
                <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full lg:h-[42rem]">

                    <div class="photo-gallery__large-image flex basis-4/5 pb-[2%]">
                        <img class="large-image__wrapper object-cover w-full rounded-lg" id="largeImg"
                            src="~@/assets/img/catalog/pendants/Rectangle.png" alt="Image 3">
                    </div>

                    <ul class="photo-gallery__thumbs basis-1/5" id="thumbs">

                        <li>
                            <a href="img/clinic/gallery/img2-lg.jpg" title="Image 2">
                                <img src="~@/assets/img/catalog/pendants/Rectangle.png">
                            </a>
                        </li>
                        <li>
                            <a href="img/clinic/gallery/img3-lg.jpg" title="Image 3">
                                <img src="~@/assets/img/catalog/pendants/Rectangle02.png">
                            </a>
                        </li>
                        <li>
                            <a href="img/clinic/gallery/img4-lg.jpg" title="Image 4">
                                <img src="~@/assets/img/catalog/pendants/Rectangle03.png">
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    <!-- </div> -->
</template>
<script>
export default {
    name: "PhotoGaleryBlock",
    components: {

    },
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
.photo-gallery__wrapper {
    .photo-gallery__thumbs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // width: 550px;

        li {
            list-style: none;
            margin: 0 1rem 0 0;

            &:last-child {
                margin: 0 0 0 0;
            }

            a {
                img {
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>