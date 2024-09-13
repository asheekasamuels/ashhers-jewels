import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { applyToken } from '../../src/service/AuthenticatedUser.js';
import { useCookies } from 'vue3-cookies';
import router from '@/router/index.js';

const { cookies } = useCookies();
const apiURL = 'https://ashhers-jewels.onrender.com';

// Apply token if it exists
const token = cookies.get('LegitUser')?.token;
if (token) {
  applyToken(token);
}

export default createStore({
  state: {
    users: [],
    user: null,
    products: [],
    recentProducts: null,
    product: null,
    cart: [],
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, value) {
      state.error = value;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setRecentProducts(state, recentProducts) {
      state.recentProducts = recentProducts;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, prodID) {
      state.cart = state.cart.filter(item => item.prodID !== prodID);
    },
    SORT_BY_PRICE(state) {
      state.products.sort((a, b) => a.amount - b.amount);
    },
    SORT_BY_NAME(state) {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true);
      try {
        const { data } = await axios.get(`${apiURL}/products`);
        const products = data.results || []; 
        commit('setProducts', products);
      } catch (e) {
        handleError(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchProduct({ commit }, id) {
      console.log(id);
      
      try {
        console.log(id);
        const result = await (await axios.get(`${apiURL}/products/${id}`)).data;
        if (result) {
          commit('setProduct', result);
          console.log(result);
        } else {
          toast.error(`Can't set single product`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
     
    async fetchUsers({ commit }) {
      commit('setLoading', true);
      try {
        const { data } = await axios.get(`${apiURL}/users`);
        const users = data.results || []; 
        commit('setUsers', users);
      } catch (e) {
        handleError(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCart({ commit }) {
      commit('setLoading', true);
      try {
        const { data } = await axios.get(`${apiURL}/cart`);
        const cartItems = data.results || []; // Use fallback to prevent errors
        commit('setCart', cartItems);
      } catch (e) {
        handleError(e);
      } finally {
        commit('setLoading', false);
      }
    },
    sortByPrice({ commit }) {
      commit('SORT_BY_PRICE');
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, prodID) {
      commit('REMOVE_FROM_CART', prodID);
    },
    async deleteUser({ commit, state }, userID) {
      try {
        await axios.delete(`${apiURL}/users/${userID}`);
        commit('setUsers', state.users.filter(user => user.userID !== userID));
      } catch (e) {
        handleError(e);
      }
    },
    async updateUser({ commit }, payload) {
      try {
        const { data } = await axios.put(`${apiURL}/users/${payload.userID}`, payload);
        commit('setUser', data); // Update the user in the state
        toast.success('User updated successfully', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        return data; // Return the updated user
      } catch (error) {
        handleError(error);
      }
    },
    async deleteProduct({ commit, state }, prodID) {
      try {
        await axios.delete(`${apiURL}/products/${prodID}`);
        commit('setProducts', state.products.filter(product => product.productID !== prodID));
      } catch (e) {
        handleError(e);
      }
    },
    async registerUser(context, payload) {
      try {
        const { data } = await axios.post(`${apiURL}/users/register`, payload);
        const { token, msg } = data; // Destructure from data
        if (token, msg) {
          toast.success(`Added new user. Thank you😎`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: 'products' });
        }
      } catch (error) {
        handleError(error);
      }
    },
    async login(context, payload) {
      try {
        const { data } = await axios.post(`${apiURL}/users/login`, payload);
        const { result, msg } = data; // Destructure from data
        if (result) {
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: 'products' });
        }
      } catch (error) {
        handleError(error);
      }
    },
    async addProduct({ commit, state }, payload) {
      try {
        const { data } = await axios.post(`${apiURL}/products`, payload);
        commit('setProducts', [...state.products, data]);
        toast.success('Product added successfully', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        handleError(error);
      }
    },
    async editProduct({ commit, state }, payload) {
      try {
        const { data } = await axios.put(`${apiURL}/products/${payload.productID}`, payload);
        commit('setProducts', state.products.map(product => (product.productID === payload.productID ? data : product)));
        toast.success('Product updated successfully', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        handleError(error);
      }
    },
    async deleteCart({ commit }) {
      try {
        await axios.delete(`${apiURL}/cart`);
        commit('setCart', []); 
        toast.success('Cart deleted successfully', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        handleError(error);
      }
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
    },
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getUser(state) {
      return state.user;
    },
    getRecentProducts(state) {
      return state.recentProducts;
    },
    getProduct(state) {
      return state.product;
    },

  }
});

// Helper function for error handling
function handleError(error) {
  const message = error.response?.data?.message || error.message; // Use the error message from the server if available
  toast.error(message, {
    autoClose: 2000,
    position: toast.POSITION.BOTTOM_CENTER,
  });
}
