<template>
  <BreadCrumbs></BreadCrumbs>
  <ProductCard :productId="productId" :product="product" :productCategory="productCategory"
    :productImg_url="productImg_url" :productGalery_url="productGalery_url" :productName="productName"
    :productDescription="productDescription" :productPrice="productPrice">
  </ProductCard>
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
    ProductOffers,
    SubscriptionBlock
  },
  props: {
    productId: {
      type: String,
      required: true,
      default: null,
    },
    /* // productImg_url: {
    //   type: String,
    // },
    // product: {
    //   type: String,
    // },
    // productImg_url: {
    //   type: Array,
    // },
    // productName: {
    //   type: String,
    // },
    // productDescription: {
    //   type: String,
    // },
    // productPrice: {
    //   type: String,
    // }, */
  },
};

</script>

