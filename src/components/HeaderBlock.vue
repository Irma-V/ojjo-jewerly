<template>
  <header class="w-full fixed z-50">
    <div class="header-wrapper max-w-[120rem] text-white text-sm">
      <div class="header-content w-3/4 flex flex-row justify-between py-6">
        <div class="header-list">
          <ul>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
          </ul>
        </div>
        <div class="logo">
          <img src="~@/assets/img/logo/OJJO.png" alt="OJJO.png" />
        </div>
        <div class="header-list">
          <ul>
            <li>
              <div class="flex flex-row justify-between items-center">
                <ion-icon name="search-outline" size="large"></ion-icon>
                <span>Поиск</span>
                <input type="text" class="hidden" />
              </div>
            </li>
            <li>
              <span>Вход/Регистрация</span>
            </li>
            <li><ion-icon name="person"></ion-icon></li>
            <li><ion-icon name="heart"></ion-icon></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
};
</script>

<style scoped lang="scss">
header {
  .header-wrapper {
    margin: 0 auto;
    // padding: 0;
    .header-content {
      margin: 0 auto;
      // padding: 0;

      .header-list {
        flex-basis: 30%;
        align-self: center;

        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

        }
      }
    }


    // .logo {}
  }
}
</style>
