<template>
    <FirstSlide></FirstSlide>
    <TagsCategoriesBlock></TagsCategoriesBlock>
    <OffersBlock></OffersBlock>
    <NewsBlock></NewsBlock>
    <GaleryBlock></GaleryBlock>
    <SubscriptionBlock></SubscriptionBlock>

    <CatalogPage></CatalogPage>
    <ProductPage></ProductPage>
</template>

<script>
import TagsCategoriesBlock from "./Blocks/indexPage/TagsCategoriesBlock.vue";
import FirstSlide from "./Blocks/indexPage/FirstSlide/FirstSlide.vue";
import GaleryBlock from "./Blocks/indexPage/GaleryBlock.vue";
import NewsBlock from "./Blocks/indexPage/NewsBlock.vue";
import OffersBlock from "./Blocks/generalBlocks/OffersBlock.vue";
import SubscriptionBlock from "./Blocks/generalBlocks/SubscriptionBlock.vue";
import CatalogPage from "./CatalogPage.vue";
import ProductPage from "./ProductPage.vue";

export default {
    name: "StartPage",
    components: {
    FirstSlide,
    TagsCategoriesBlock,
    NewsBlock,
    OffersBlock,
    GaleryBlock,
    SubscriptionBlock,
    CatalogPage,
    ProductPage
},

    data() {
        return {

        }
    }
};
</script>