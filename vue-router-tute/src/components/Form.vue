<template>
  <Navbar />

  <div>
    <h1>Added Bootstrap</h1>
    <form class="row g-3 needs-validation" novalidate @submit.prevent="handleSubmit">
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
            required>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationCustom03" required>
        <div class="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">State</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>India</option>
          <option>Australia</option>
          <option>England</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationCustom05" required>
        <div class="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn" type="submit">Submit form</button>
      </div>
    </form>

    <div id="carouselExampleControls" class="carousel slide bg-secondary w-75  mx-auto" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 mx-auto" alt="...">
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 mx-auto" alt="...">
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWN0JTIwanN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 mx-auto" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <img
      src="https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5kYW1hbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      class="mx-auto d-block m-2" alt="andmans">
    <Test :message="message" :likes="likes" />
  </div>

</template>

<script setup>
import Navbar from "./Navbar.vue";
import Test from "./Test.vue";

const handleSubmit = () => {

}

const message = "Test component inside form"

const likes = 200
</script>

<style lang="scss" scoped>
.btn {
  background-color: rgb(0, 149, 255);
  border-radius: 10px;

  &:hover {
    background-color: aqua;
  }
}
</style>
