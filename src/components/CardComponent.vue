<script>
    export default {
        props: {
            product: Object
        },
        methods: {
            gotoProduct() {
                this.$router.push({name: 'productParams', params: {price: this.product.price}, query: {title: this.product.title}})
            }
        }
    }
</script>

<template>
    
    <div class="card">
        <div class="card-overlay">
            <h1 class="card-overlay-heading">
                    {{ product.title }}
            </h1>
            <p class="card-overlay-paragraph">Price: €{{ product.price }}</p>

            <!-- zie ook _components.scss regel 113 - 116 voor aanpassingen aan de opmaak: -->
            <router-link class="card-overlay-button" :to="{ name: 'productParams', params: {price: product.price}, query: {title: product.title}}">
                Info
            </router-link>
            <button class="card-overlay-button" @click="gotoProduct()">Order now</button>
        </div>
        <img :src="product.imageLink" :alt="product.imageAlt" class="card-image">
    </div>

</template>