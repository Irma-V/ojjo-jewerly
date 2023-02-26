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
            <li class="telephoneIcon">8 (812) 234-56-55</li>
            <li class="telephoneIcon">8 (812) 234-56-55</li>
            <li class="mailIcon">ojjo@ojjo.ru</li>
          </ul>
        </div>
        <div class="footer-list">
          <h2>Social Media</h2>
          <hr>
          <ul class="text-sm">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</li>
            <li>
              <div class="social-media-group flex flex-row justify-between">
                <img src="~@/assets/img/svg/youtube.svg" alt="">
                <img src="~@/assets/img/svg/vk.svg" alt="">
                <img src="~@/assets/img/svg/facebook.svg" alt="">
                <img src="~@/assets/img/svg/telegram.svg" alt="">
                <img src="~@/assets/img/svg/e__logo.svg" alt="">

              </div>
            </li>
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
        .telephoneIcon {
          list-style-image: url(~@/assets/img/svg/phone__icon.svg);
        }

        .mailIcon {
          list-style-image: url(~@/assets/img/svg/mail__icon.svg);

        }
      }
    }
  }
}
</style>