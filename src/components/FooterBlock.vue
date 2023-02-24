<template>
  <footer class="w-full py-[3.75rem]">
    <content class="flex flex-col px-[15%] font-sans tracking-tight text-xl">

      <div class="footer-wrapper flex flex-row justify-between font-thin">
        <div class="footer-list">
          <h2>Useful Links</h2>
          <hr>
          <ul class="text-sm">
            <li>Shipping</li>
            <li>Payment</li>
            <li>Promotions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div class="footer-list">
          <h2>payment</h2>
          <hr>
          <ul class="text-sm">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper justo, nec, pellentesque.</li>
            <li>
              <div class="logos flex flex-row justify-between w-1/2">
                <div class="logos-item basis-[45%]">
                  <img src="~@/assets/img/logo/visa.png" alt="">
                </div>
                <div class="logos-item basis-[45%]">
                  <img src="~@/assets/img/logo/mastercard.png" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <h2>contacts</h2>
          <hr>
          <ul class="text-sm">
            <li class="telephoneIcon">menu1</li>
            <li class="telephoneIcon">menu2</li>
            <li class="mailIcon">menu2</li>
          </ul>
        </div>
        <div class="footer-list">
          <h2>Social Media</h2>
          <hr>
          <ul class="text-sm">
            <li>menu1</li>
            <li>menu2</li>
          </ul>
        </div>
      </div>
      <hr>
    </content>
  </footer>
</template>

<script>
export default {
  name: "FooterBlock",
};
</script>

<style scoped lang="scss">
footer {
  .footer-wrapper {
    .footer-list {
      width: 20%;
      padding-bottom: 3%;

      h2 {
        text-transform: uppercase;
        padding-bottom: 5%;

      }

      ul {
        li {
          text-transform: capitalize;
          padding-top: 3%;
          padding-bottom: 3%;
        }
        .telephoneIcon {}

        .mailIcon {}
      }
    }
  }
}
</style>