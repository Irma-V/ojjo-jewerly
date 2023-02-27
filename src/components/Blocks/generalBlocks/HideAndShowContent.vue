<template>
    <div class="hide-and-show-content" :class="hideAndShowStyle">
        <div ref="mainContent" class="hide-and-show__main-content" :class="mainContentStyle">
            <slot name="mainContent"></slot>
        </div>
        <div class="show-more cursor-pointer" :class="ShowMoreButtonStyle" @click="showFullContent()">
            <slot name="ShowMoreButton"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "HideAndShowContent",
    components: {

    },
    props: {
        showHeight: {
            type: Number,
            default: 15,
        },
        hideAndShowStyle: {
            type: String,
            default: '',
        },
        mainContentStyle: {
            type: String,
            default: '',
        },
        ShowMoreButtonStyle: {
            type: String,
            default: '',
        },
    },
    data() {
        return {

        }
    },
    mounted() {
        this.hideContent()

    },

    methods: {
        litleContent() {
            return this.$refs.mainContent.style.maxHeight < this.showHeight
        },
        hideButton() {
            return this.$refs.mainContent.nextElementSibling.style.display = "none"
        },
        hideContent() {

            this.$refs.mainContent.style.maxHeight = this.showHeight + "rem"
            this.$refs.mainContent.style.overflow = "hidden"
            console.log(this.$refs.mainContent.style.maxHeight);

        },

        showFullContent() {
            if (this.hideContent) {
                this.$refs.mainContent.style.maxHeight = "100%"
                this.$refs.mainContent.style.overflow = "none"
                this.hideButton()
            }
        }
    }
}
</script>
<style scoped lang="scss">

</style>