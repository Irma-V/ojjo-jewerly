<template>
    <FirstSlide></FirstSlide>
    <CatalogBlock></CatalogBlock>
    <OffersBlock></OffersBlock>
    <NewsBlock></NewsBlock>
    <GaleryBlock></GaleryBlock>
    <SubscriptionBlock></SubscriptionBlock>
    <AboutItBlock></AboutItBlock>
</template>

<script>
import CatalogBlock from "./Blocks/indexPage/TagsCategoriesBlock.vue";
import FirstSlide from "./Blocks/indexPage/FirstSlide/FirstSlide.vue";
import GaleryBlock from "./Blocks/indexPage/GaleryBlock.vue";
import NewsBlock from "./Blocks/indexPage/NewsBlock.vue";
import OffersBlock from "./Blocks/generalBlocks/OffersBlock.vue";
import SubscriptionBlock from "./Blocks/generalBlocks/SubscriptionBlock.vue";
import AboutItBlock from "./Blocks/AboutItBlock.vue";

export default {
    name: "StartPage",
    components: {
    FirstSlide,
    CatalogBlock,
    NewsBlock,
    OffersBlock,
    GaleryBlock,
    SubscriptionBlock,
    AboutItBlock
},

    data() {
        return {

        }
    }
};
</script>