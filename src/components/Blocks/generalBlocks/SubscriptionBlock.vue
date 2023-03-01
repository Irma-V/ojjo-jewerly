<template>
    <section class="my-[3.75rem] text-white">
        <content>
            <div class="subscription-block">
                <div class="subscription-block__wrapper flex flex-col justify-between items-center">
                    <TitleBlock title="Exclusive mailing of letters" description="Useful tips and personalized offers">
                    </TitleBlock>

                    <div class="sub-item font-sans font-thin tracking-tight text-xl w-4/6 h-28 mb-[6.25rem]">
                        <div class="sub-item__wrapper flex flex-row justify-between h-full">
                            <ul class="list basis-[30%] h-full flex flex-col justify-between">
                                <li>
                                    <span>
                                        Personal manager
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Delivery and clearance
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Individual design
                                    </span>
                                </li>
                            </ul>
                            <div class="feedback basis-[70%] h-full border p-4 mb-[3.75rem]">
                                <div class="bg-white h-full flex flex-row justify-between items-center p-4">
                                    <div class="inpt basis-[45%]">
                                        <input type="text" placeholder="your e'mail" class="h-[2.8125rem]">
                                    </div>
                                    <div class="btn basis-[45%]">
                                        <ButtonDarkGray button-name="send"></ButtonDarkGray>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </content>
    </section>
</template>
<script>
import ButtonDarkGray from './ButtonsStyle/ButtonDarkGray.vue';
import TitleBlock from './TitleBlock.vue';

export default {
    name: "SubscriptionBlock",
    components: {
        TitleBlock,
        ButtonDarkGray
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

    content {
        .subscription-block {
            .subscription-block__wrapper {
                ul {
                    li {
                        list-style-image: url(~@/assets/img/svg/subscribe__icon.svg);
                    }
                }
            }
        }
    }
}</style>