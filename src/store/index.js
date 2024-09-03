import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { applyToken } from '../../src/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const apiURL = 'https://ashhers-jewels.onrender.com'


applyToken(cookies.get('LegitUser')?.token)

export default createStore({
  state: {
    users: null,
    user: null,
    products: [], 
    recentProducts: null,
    product: [],
    loading: false, 
    error: null 
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value
    },
    setError(state, value) {
      state.error = value
    },
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },
    sortByPrice(state) {
      state.products.sort((a, b) => a.amount - b.amount)
    },
    sortByName(state) {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName))
    }
  },
  actions: {
    async fetchProducts(context) {
      context.commit('setLoading', true);
      try {
        const { results } = await (await axios.get(`${apiURL}/products`)).data
        console.log(results);
        
        if (Array.isArray(results)) {
          context.commit('setProducts', results);
        } else {
          console.error('Unexpected API response:', results);
          context.commit('setProducts', []); 
          context.commit('setError', 'Failed to fetch products');
        }
      } catch (e) {
        toast.error(`${e.message}`, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });
        context.commit('setError', e.message);
      } finally {
        context.commit('setLoading', false);
      }
    },
    
    sortByPrice({ commit }) {
      commit('sortByPrice')
    },
    sortByName({ commit }) {
      commit('sortByName')
    }
    
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    hasError(state) {
      return state.error !== null;
    },
    getError(state) {
      return state.error;
    }
  }
})