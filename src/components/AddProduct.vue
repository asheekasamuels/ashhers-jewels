<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
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
            <button type="button" data-bs-dismiss="modal" aria-label="Close">
              X
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <p>All fields are required</p>
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Product Name</label
                >
                <input
                  type="text"
                  v-model="productData.productName"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert product name')"
                  oninput="this.setCustomValidity('')"
                />
                
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Quantity</label
                >
                <input
                  type="number"
                  v-model="productData.quantity"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert a quantity')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Price</label
                >
                <input
                  type="number"
                  v-model="productData.price"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert the price')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Category</label
                >
                <input
                  type="text"
                  v-model="productData.category"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert product category')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Description</label
                >
                <input
                  type="text"
                  v-model="productData.descr"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert product description')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Product Image 1</label
                >
                <input
                  type="url"
                  v-model="productData.prodImg1"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert product image url')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
  
              <div class="inputs">
                <label for="exampleFormControlInput1" class="form-label"
                  >Product Image 2</label
                >
                <input
                  type="url"
                  v-model="productData.prodImg2"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Please insert product image url')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <button type="reset" class="">Reset</button>
              <button type="submit" class="">Submit</button>
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
          price: "",
          category: "",
          descr: "",
          prodImg1: "",
          prodImg2: "",
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