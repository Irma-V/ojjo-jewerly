<template>
  <BreadCrumbs></BreadCrumbs>
  <ProductCard></ProductCard>
  <AboutItBlock></AboutItBlock>
  <ProductOffers></ProductOffers>
  <SubscriptionBlock></SubscriptionBlock>
</template>

<script>
import AboutItBlock from './Blocks/CatalogPage/AboutItBlock.vue';
import BreadCrumbs from './Blocks/generalBlocks/BreadCrumbs .vue';
import SubscriptionBlock from './Blocks/generalBlocks/SubscriptionBlock.vue';
import ProductOffers from './Blocks/ProductPage/ProductOffers.vue';
import ProductCard from './Blocks/ProductPage/ProductСard.vue'
export default {
  name: "ProductPage",
  components: {
    BreadCrumbs,
    ProductCard,
    AboutItBlock,
    SubscriptionBlock,
    ProductOffers
},
};
</script>