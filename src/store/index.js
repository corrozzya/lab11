import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Товар 1', description: 'Описание товара 1' },
      { id: 2, name: 'Товар 2', description: 'Описание товара 2' },
    ]
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === parseInt(id))
    }
  }
})
