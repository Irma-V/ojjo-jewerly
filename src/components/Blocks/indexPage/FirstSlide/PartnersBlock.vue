<template>
  <section>
    <content>
      <div class="partners-block">

        <agile :slidesToShow="6" :autoplay="true" :navButtons="false" :autoplaySpeed="5000">

          <div v-for="partnerItem in partnersLogos" :key="partnerItem" class="partners-item border-r-[0.1rem] px-[2%]">
            <img :src="partnerItem.logo_url" alt="">
          </div>
        </agile>
      </div>
    </content>
  </section>
</template>

<script>
import { partnersLogos } from "@/database-mock"
import { VueAgile } from 'vue-agile'

export default {
  name: "PartnersBlock",
  components: {
    agile: VueAgile
  },
  props: {

  },
  data() {
    return {
      partnersLogos: partnersLogos,
    }
  }
}
</script>
<style scoped lang="scss"></style>

<!-- 
  <ul class="partners-block__wrapper flex flex-row justify-between">
    <li v-for="partnerItem in partnersLogos" :key="partnerItem" class="partners-item border-r-[0.1rem] last:border-r-0 px-[2%]">
      <img :src="partnerItem.logo_url" alt="">
    </li>
  </ul> 
-->