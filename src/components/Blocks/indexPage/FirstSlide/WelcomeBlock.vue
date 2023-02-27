<template>
    <section>
        <content>
            <div class="flex h-full w-full flex-col  mt-[33rem]">
            <div class="welcome-block__wrapper flex flex-col justify-between items-center text-white h-[9.375rem]">
                <h1 class="capitalize font-serif text-3xl font-bold tracking-tight text-center">expensive quality, richness
                </h1>
                <div class="btn-to-catalog__wrapper w-1/5">
                    <ButtonDarkGray button-name="product catalog"></ButtonDarkGray>
                </div>
            </div>
            </div>
        </content>
    </section>
</template>
<script>

import ButtonDarkGray from '../../generalBlocks/ButtonsStyle/ButtonDarkGray.vue';



export default {
    name: "WelcomeBlock",
    components: {
    ButtonDarkGray,
},
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss"></style>