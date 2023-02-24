<template>
    <div class="footer-list  pb-[5%]">
        <h2 class="pb-[3%] uppercase">footerListTitle</h2>
        <hr>
        <ul>
            <li class="capitalize pb-[3%]">footerlistItem</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "FooterListBlock",
    components: {

    },
    props: {
        footerListTitle: {
            type:String,
            default: 'Заголовок'
        },
        footerlistItem: {
            type:String,
            default: 'menu'
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss"></style>