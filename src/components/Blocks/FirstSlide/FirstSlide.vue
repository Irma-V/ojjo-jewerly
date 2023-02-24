<template>
  <WelcomeBlock></WelcomeBlock>
  <hr>
  <PartnersBlock></PartnersBlock>
</template>

<script>
import PartnersBlock from '../FirstSlide/PartnersBlock.vue';
import WelcomeBlock from '../FirstSlide/WelcomeBlock.vue';

export default {
  name: "FirstSlide",
  components: {
    PartnersBlock,
    WelcomeBlock
  }
};
</script>

<style scoped lang="scss">
</style>
