<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      @click="editProd(product?.prodID)"
      class=""
      data-bs-toggle="modal"
      :data-bs-target="'#editProduct' + product?.prodID"
    >
      Edit
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'editProduct' + product?.prodID"
      tabindex="-1"
      :aria-labelledby="'editProduct' + product?.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Product Name</label
                >
                <input
                  type="text"
                  v-model="payload.prodName"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Quantity</label
                >
                <input
                  type="number"
                  v-model="payload.quantity"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Price</label
                >
                <input
                  type="number"
                  v-model="payload.amount"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Category</label
                >
                <input
                  type="text"
                  v-model="payload.category"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Description</label
                >
                <input
                  type="text"
                  v-model="payload.desc"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Product Image </label
                >
                <input
                  type="url"
                  v-model="payload.prodUrl"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <button type="reset" class="">Reset</button>
              <button type="submit" class="" data-bs-dismiss="modal">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
    data() {
      return {
        updateProd: {
          ...this.product,
        },
        updateProdID: null,
        payload: {
          prodID: this.product?.prodID,
          prodName: this.product?.prodName,
          quantity: this.product?.quantity,
          amount: this.product?.amount,
          category: this.product?.category,
          desc: this.product?.desc,
          prodUrl: this.product?.prodUrl,
      
        },
      };
    },
    computed: {
      currentProd() {
        return this.$store.state.product;
      },
    },
    methods: {
      editProd(productID) {
        this.updateProdID = productID;
        this.updateProd = {
          ...this.$store.state.products.find(
            (product) => product.productID === productID
          ),
        };
      },
      updateProduct() {
        this.$store.dispatch("updateProduct", this.payload)
      
      },
    },
  };
  </script>