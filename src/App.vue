<script>
    import NavComponent from '@/components/NavComponent.vue'
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'

    export default {
        data() {
            return {
                mainTitle: "Snaky Sneakers",
                subTitle: "Sneaker Reseller"
            }
        },
        components: {
            NavComponent,
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<template>
    <NavComponent/>
    <HeaderComponent
        :mainTitle="mainTitle" 
        :subTitle="subTitle"
    />

    <router-view></router-view>
    
    <FooterComponent
        :mainTitle="mainTitle" 
        :subTitle="subTitle"
    />
</template>