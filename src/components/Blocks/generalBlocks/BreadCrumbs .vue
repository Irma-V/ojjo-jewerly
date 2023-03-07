<template>
    <section>
        <content>
            <div @click="this.toCamelCase">BreadCrumbs</div>
            <!-- <BBreadcrumb>
                <BBreadcrumbItem>home</BBreadcrumbItem>
                <BBreadcrumbItem>home</BBreadcrumbItem>
                <BBreadcrumbItem>home</BBreadcrumbItem>
            </BBreadcrumb> -->
        </content>
    </section>
</template>
<script>


// import { BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'
export default {
    name: "BreadCrumbs",
    components: {
        //    BBreadcrumb,
        //    BBreadcrumbItem,
    },
    props: {

    },
    data() {
        return {

        }
    },

    methods: {
        toCamelCase() {
            let str = "jopa-zhopa_jopa/ZHOPA|sgerge"
            console.log(str);
            console.log(str.toUpperCase());
            console.log(str.toLowerCase());
            // var myString = 'Привет, мир. Как дела?';
            let splits = str.split('', str.length);

            console.log(splits);

            for (let i=0; i < splits.length; i++ ) {
                // console.log(splits[i]);
                // if(splits[0]) {
                //     if(splits[0] === splits[i].toUpperCase()) {
                //         return
                //     } else {
                //         splits[0] =  splits[i].toUpperCase()
                //         console.log(splits[0]);
                //     }
                // }
                // if (splits[i] === splits[i].toUpperCase()) {
                //     console.log(true);
                // }
            }

        }
    }
}
</script>
<style scoped lang="scss"></style>