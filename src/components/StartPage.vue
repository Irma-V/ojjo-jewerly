<template>
    <FirstSlide></FirstSlide>
    <CatalogBlock></CatalogBlock>
    <OffersBlock></OffersBlock>
    <NewsBlock></NewsBlock>
    <GaleryBlock></GaleryBlock>
    <SubscriptionBlock></SubscriptionBlock>
</template>

<script>
import CatalogBlock from "./Blocks/TagsCategoriesBlock.vue";
import FirstSlide from "./Blocks/FirstSlide/FirstSlide.vue";
import GaleryBlock from "./Blocks/GaleryBlock.vue";
import NewsBlock from "./Blocks/NewsBlock.vue";
import OffersBlock from "./Blocks/OffersBlock.vue";
import SubscriptionBlock from "./Blocks/SubscriptionBlock.vue";

export default {
    name: "StartPage",
    components: {
    FirstSlide,
    CatalogBlock,
    NewsBlock,
    OffersBlock,
    GaleryBlock,
    SubscriptionBlock
},

    data() {
        return {

        }
    }
};
</script>