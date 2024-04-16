<template lang="html">
        <section class="container">
        <h1 class="main-heading">Products</h1>
        <h2>{{ priceParam }}</h2>
        <h2>{{ titleParam}}</h2>
    </section>
</template>
<script>
export default {
    computed: {
            priceParam(){
                return this.$route.params.price
            },
            titleParam() {
                return this.$route.query.title
            }
        }
}
</script>