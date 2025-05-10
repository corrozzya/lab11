<template>
  <div>
    <h1>Список товаров</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/products/' + product.id">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const products = computed(() => store.state.products)
    return { products }
  }
}
</script>