<template>
  <FilterBlock></FilterBlock>
  <CatalogBlock></CatalogBlock>
  <AboutItBlock></AboutItBlock>
  <SubscriptionBlock></SubscriptionBlock>

</template>

<script>
import FilterBlock from "./Blocks/CatalogPage/FilterBlock.vue";
import CatalogBlock from "./Blocks/CatalogPage/CatalogBlock.vue";
import AboutItBlock from "./Blocks/CatalogPage/AboutItBlock.vue";
import SubscriptionBlock from "./Blocks/generalBlocks/SubscriptionBlock.vue";

export default {
  name: "CatalogPage",
  components: {
    FilterBlock,
    CatalogBlock,
    AboutItBlock,
    SubscriptionBlock
},
};
</script>