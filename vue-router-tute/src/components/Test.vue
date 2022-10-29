<template>
  <Navbar />

  <div>
    <section class="card-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-md-3">
            <div class="card mb-5 border-0">
              <div class="card-body">
                <div class="icontext d-flex">
                  <img
                    src="../assets/woman.png"
                    alt="woman"
                    class="img-fluid"
                  />
                  <div class="d-flex flex-column name">
                    <p>BILLY BOLEY</p>
                    <span>Joss Garden</span>
                    <div class="starwrapper d-flex">
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <div class="card mb-5 border-0">
              <div class="card-body">
                <div class="icontext d-flex">
                  <img
                    src="../assets/woman.png"
                    alt="woman"
                    class="img-fluid"
                  />
                  <div class="d-flex flex-column name">
                    <p>BILLY BOLEY</p>
                    <span>Joss Garden</span>
                    <div class="starwrapper d-flex">
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <div class="card mb-5 border-0">
              <div class="card-body">
                <div class="icontext d-flex">
                  <img
                    src="../assets/woman.png"
                    alt="woman"
                    class="img-fluid"
                  />
                  <div class="d-flex flex-column name">
                    <p>BILLY BOLEY</p>
                    <span>Joss Garden</span>
                    <div class="starwrapper d-flex">
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <div class="card mb-5 border-0">
              <div class="card-body">
                <div class="icontext d-flex">
                  <img
                    src="../assets/woman.png"
                    alt="woman"
                    class="img-fluid"
                  />
                  <div class="d-flex flex-column name">
                    <p>BILLY BOLEY</p>
                    <span>Joss Garden</span>
                    <div class="starwrapper d-flex">
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-md-3">
            <div class="card mb-5 border-0">
              <div class="card-body">
                <div class="icontext d-flex">
                  <img
                    src="../assets/woman.png"
                    alt="woman"
                    class="img-fluid"
                  />
                  <div class="d-flex flex-column name">
                    <p>BILLY BOLEY</p>
                    <span>Joss Garden</span>
                    <div class="starwrapper d-flex">
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                      <img
                        src="../assets/star.png"
                        class="star img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p class="lead text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus voluptates consectetur facilis in adipisci quo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <h1>has published book:</h1>
            <p>{{ author.boooks.length > 2 ? "Yes" : "No" }}</p>  same logic can be achieved by computed property -->
      <h1>has published book:</h1>
      <p>{{ hasPublishedBook }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import Navbar from "./Navbar.vue";

const input = ref(null);
const btn = ref(null);
const props = defineProps({
  message: String,
  likes: Number,
});

// we can use ref for handeling eventlisteners

// onMounted(() => {
//     input.value.style.background = 'red'
//     btn.value.addEventListener("click", (() => {
//         btn.value.style.background = 'yellow';  // working
//         console.log('clicked');
//     }))
// })

setTimeout(() => {
  console.log("vue js is running");
}, 3000);

setInterval(() => {
  console.log("interval is running");
}, 3000);

const author = reactive({
  name: "Javascript",
  boooks: ["Advanced Javascript", " Js -2 Advanced Guide", "js-3"],
});

//  using computed property->

const hasPublishedBook = computed(() => {
  return author.boooks.length > 2 ? "Yes" : "No";
});
const myKey = Symbol("my symbol key");
console.log(myKey);
</script>

<style lang="scss" scoped>
/* .container {
    display: flex;
    justify-content: center;
    align-items: center;
} */

.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  background-color: rgb(132, 125, 125);
}

.star {
  width: 1vmax;
  height: 1vmax;
}

.icontext {
  gap: 2vmax;
}

.name {
  gap: 1vmax;
}

.starwrapper {
  gap: 1vmax;
}
</style>
