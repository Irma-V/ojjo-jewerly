<template>
    <section class="my-[3.75rem] text-white">
        <content>
            <div class="offers-block">
                <div class="offers-block__wrapper flex flex-col justify-between items-center">
                    <TitleBlock title="Visit our salons in Moscow" description="Don't know what to choose?"></TitleBlock>
                    <p class="description font-sans font-thin tracking-tight text-xl text-center w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut duis tortor vitae pellentesque egestas quam pulvinar.
                        Pellentesque porttitor velit sit pellentesque.
                        Suspendisse donec pretium id dignissim.
                        Dignissim ultrices eget orci viverra.
                        Egestas quis et ut ultrices imperdiet lectus nulla tempus.
                        Pharetra lorem sem purus nisi libero viverra ipsum.
                    </p>
                    <div class="btn-to-catalog__wrapper w-1/6 py-[3.75rem]">
                        <ButtonWhite button-name="our salons"></ButtonWhite>
                    </div>
                </div>
            </div>
        </content>
    </section>
</template>
<script>
import ButtonWhite from './ButtonsStyle/ButtonWhite.vue';
import TitleBlock from './TitleBlock.vue';

export default {
    name: "OffersBlock",
    components: {
        TitleBlock,
        ButtonWhite
    },
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">
section {
    background-image: url(~@/assets/img/background/background.png);
}
</style>