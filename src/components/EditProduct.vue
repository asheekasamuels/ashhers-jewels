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
  /* Button styles */
.btn-edit {
  background-color: #ff69b4;
  color: white; 
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-edit:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

/* Modal header styles */
.modal-header {
  background-color: #f9e5e8; /* Baby pink */
  border-bottom: 1px solid #c0c0c0; /* Silver border */
}

/* Modal body styles */
.modal-body {
  padding: 20px;
}

/* Input field styles */
.inputs {
  margin-bottom: 15px;
}

.inputs .form-label {
  font-weight: bold;
}

/* Form control styles */
.form-control {
  border: 1px solid #c0c0c0; /* Silver border */
  border-radius: 5px; /* Rounded corners */
}

/* Reset button styles */
.btn-reset {
  background-color: #ccc; /* Gray */
  color: #000; /* Black text */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  margin-right: 10px; /* Space between buttons */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-reset:hover {
  background-color: #b3b3b3; /* Darker gray on hover */
}

/* Save button styles */
.btn-save {
  background-color: #ff69b4; /* Hot pink */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-save:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

  </style>