import { createStore } from 'vuex'
import pictureService from '@/service/pictureService';

interface Product {
  id: number,
  quantity: number
}
interface Cart {
  products: Product[],
  sumPrice: number
}

export default createStore<{ language: number, cart: Cart }>({
  state: {
    language: 1,
    cart: {
      products: [],
      sumPrice: 0
    } as Cart
  },
  mutations: {
    changeLanguage(state, newLanguage) {
      state.language = newLanguage;
    },
    setSumPrice(state, newSumPrice) {
      state.cart.sumPrice = newSumPrice;
    }
  },
  actions: {
    addToCart({ state, dispatch }, id: number) {
      let found = false;

      state.cart.products.forEach(element => {
        if (element.id == id) {
          element.quantity++
          found = true
          dispatch('sumPriceProduct')
        }
      });
      if(!found){
        const product = {
          id: id,
          quantity: 1
        }
        state.cart.products.push(product);
        dispatch('sumPriceProduct')
      }
      
    },
    sumPriceProduct({ commit, state }) {
      let sumPrice = 0;
      state.cart.products.forEach(element => {
        pictureService.getPictureById(element.id).then((res) => {
          const priceProduct = res.data.price * element.quantity;
          sumPrice += priceProduct;
          commit('setSumPrice', sumPrice)
        }).catch((e) => {
          throw new e;
        })
      })
    }
  }
})
