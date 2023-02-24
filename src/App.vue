<template>
  <HeaderBlock></HeaderBlock>
  <div class="container min-h-full max-w-[120rem] flex flex-col">
    <main class="min-h-full flex flex-col">
      <router-view></router-view>
    </main>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import FooterBlock from "./components/FooterBlock.vue";
import HeaderBlock from "./components/HeaderBlock.vue";

export default {
  name: "App",
  components: {
    FooterBlock,
    HeaderBlock,
  },
};
</script>

<style scoped lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

</style>
