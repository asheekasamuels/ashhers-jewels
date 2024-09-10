<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn-add"
    data-bs-toggle="modal"
    data-bs-target="#addProduct"
  >
    Add Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addProduct"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addProduct">
            <p>All fields are required</p>
            <div class="inputs">
              <label for="prodName" class="form-label">Product Name</label>
              <input
                type="text"
                v-model="productData.prodName"
                class="form-control"
                id="prodName"
                required
                oninvalid="this.setCustomValidity('Please insert product name')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="quantity" class="form-label">Quantity</label>
              <input
                type="number"
                v-model="productData.quantity"
                class="form-control"
                id="quantity"
                required
                oninvalid="this.setCustomValidity('Please insert a quantity')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="amount" class="form-label">Price</label>
              <input
                type="number"
                v-model="productData.amount"
                class="form-control"
                id="amount"
                required
                oninvalid="this.setCustomValidity('Please insert the price')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="category" class="form-label">Category</label>
              <input
                type="text"
                v-model="productData.category"
                class="form-control"
                id="category"
                required
                oninvalid="this.setCustomValidity('Please insert product category')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="desc" class="form-label">Description</label>
              <input
                type="text"
                v-model="productData.desc"
                class="form-control"
                id="desc"
                required
                oninvalid="this.setCustomValidity('Please insert product description')"
                oninput="this.setCustomValidity('')"
              />
            </div>

            <div class="inputs">
              <label for="prodUrl" class="form-label">Product Image</label>
              <input
                type="url"
                v-model="productData.prodUrl"
                class="form-control"
                id="prodUrl"
                required
                oninvalid="this.setCustomValidity('Please insert product image URL')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <button type="reset" class="btn-reset">Reset</button>
            <button type="submit" class="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import router from "@/router";
  export default {
    props: ["product"],
    data() {
      return {
        productData: {
          productName: "",
          quantity: "",
          amount: "",
          category: "",
          desc: "",
          prodUrl: "",
        },
      };
    },
    methods: {
      addProduct() {
        this.$store.dispatch("addProduct", this.productData);
        alert("Product has been added successfully");
        router.push("/admin");
      },
    },
  };
  </script>

  <style scoped>
  /* Button styles */
.btn-add {
  background-color: #ff69b4; /* Hot pink */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-add:hover {
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

/* Submit button styles */
.btn-submit {
  background-color: #ff69b4; /* Hot pink */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 10px 15px; /* Padding for a better button size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.btn-submit:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

  </style>