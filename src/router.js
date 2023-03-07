import { createRouter, createWebHashHistory } from "vue-router";
import StartPage from "./components/StartPage.vue";
import CatalogPage from "./components/CatalogPage.vue";
import ProductPage from "./components/ProductPage.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/StartPage", name: "StartPage", component: StartPage, alias: "/" },
      { path: "/CatalogPage", name: "CatalogPage", component: CatalogPage},
      //ProductPage
      { 
        path: "/ProductPage/:productId",
        name: "ProductPage",
        component: ProductPage,
        props: true,
      },
    ],
  
    scrollBehavior(to, from, savedPosition) {
  
      if (savedPosition) {
        return savedPosition;
      } 
      else if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      } 
      else {
        return {top: 0};      
      }
    },
  });