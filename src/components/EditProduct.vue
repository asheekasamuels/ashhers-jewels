<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    @click="editProd(product?.prodID)"
    class="btn-edit"
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
              <label for="productName" class="form-label">Product Name</label>
              <input
                type="text"
                v-model="payload.prodName"
                class="form-control"
                id="productName"
              />
            </div>
            <div class="inputs">
              <label for="quantity" class="form-label">Quantity</label>
              <input
                type="number"
                v-model="payload.quantity"
                class="form-control"
                id="quantity"
              />
            </div>
            <div class="inputs">
              <label for="price" class="form-label">Price</label>
              <input
                type="number"
                v-model="payload.amount"
                class="form-control"
                id="price"
              />
            </div>
            <div class="inputs">
              <label for="category" class="form-label">Category</label>
              <input
                type="text"
                v-model="payload.category"
                class="form-control"
                id="category"
              />
            </div>
            <div class="inputs">
              <label for="description" class="form-label">Description</label>
              <input
                type="text"
                v-model="payload.desc"
                class="form-control"
                id="description"
              />
            </div>
            <div class="inputs">
              <label for="productImage" class="form-label">Product Image</label>
              <input
                type="url"
                v-model="payload.prodUrl"
                class="form-control"
                id="productImage"
              />
            </div>
            <button type="reset" class="btn-reset">Reset</button>
            <button type="submit" class="btn-save" data-bs-dismiss="modal">Save</button>
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
      editProd(prodID) {
        this.updateProdID = prodID;
        this.updateProd = {
          ...this.$store.state.products.find(
            (product) => product.prodID === prodID
          ),
        };
      },
      updateProduct() {
        this.$store.dispatch("updateProduct", this.payload)
      
      },
    },
  };
  </script>

<style scoped>
.btn-edit {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-edit:hover {
  background-color: #ff1493;
}

.modal-header {
  background-color: #f9e5e8;
  border-bottom: 1px solid #c0c0c0;
}

.modal-body {
  padding: 20px;
}

.inputs {
  margin-bottom: 15px;
}

.inputs .form-label {
  font-weight: bold;
}

.form-control {
  border: 1px solid #c0c0c0;
  border-radius: 5px;
}

.btn-reset {
  background-color: #ccc;
  color: #000;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-reset:hover {
  background-color: #b3b3b3;
}

.btn-save {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-save:hover {
  background-color: #ff1493;
}
</style>
