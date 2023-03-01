<template>
    <FirstSlide></FirstSlide>
    <TagsCategoriesBlock></TagsCategoriesBlock>
    <OffersBlock></OffersBlock>
    <NewsBlock></NewsBlock>
    <GaleryBlock></GaleryBlock>
    <SubscriptionBlock></SubscriptionBlock>
    <AboutItBlock></AboutItBlock>
    <CatalogBlock></CatalogBlock>
</template>

<script>
import TagsCategoriesBlock from "./Blocks/indexPage/TagsCategoriesBlock.vue";
import FirstSlide from "./Blocks/indexPage/FirstSlide/FirstSlide.vue";
import GaleryBlock from "./Blocks/indexPage/GaleryBlock.vue";
import NewsBlock from "./Blocks/indexPage/NewsBlock.vue";
import OffersBlock from "./Blocks/generalBlocks/OffersBlock.vue";
import SubscriptionBlock from "./Blocks/generalBlocks/SubscriptionBlock.vue";
import AboutItBlock from "./Blocks/CatalogPage/AboutItBlock.vue";
import CatalogBlock from "./Blocks/CatalogPage/CatalogBlock.vue";

export default {
    name: "StartPage",
    components: {
    FirstSlide,
    TagsCategoriesBlock,
    NewsBlock,
    OffersBlock,
    GaleryBlock,
    SubscriptionBlock,
    AboutItBlock,
    CatalogBlock
},

    data() {
        return {

        }
    }
};
</script>