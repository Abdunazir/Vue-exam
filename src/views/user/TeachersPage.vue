<script setup lang="ts">
// import SvgIcon from "@jamescoyle/vue-icon";
// import { mdiStar } from "@mdi/js";
// import { mdiCartPlus } from "@mdi/js";
// import { mdiHeartOutline } from "@mdi/js";
import { ref } from "vue";
import t1 from "../../assets/img/mr-dilshod.jpg";
import t2 from "../../assets/img/mr_olimjon.jpg";
import t3 from "../../assets/img/mr_otabek.jpg";
import t4 from "../../assets/img/ms-madina.jpg";

const teachers = [t1, t2, t3, t4];

const product = ref();
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    (product.value = json), console.log(json);
  });
</script>

<template>
  <section class="container flex flex-wrap justify-between gap-1 mb-10">
    <div
      class="group card w-[49%] md:w-[24%] lg:w-[19%] rounded-sm p-1 sm:mt-2 mt-3 md:mt-5 lg:mt-9 hover:shadow-lg duration-200"
      v-for="(img, index) in teachers"
      :key="index"
    >
      <div
        class="cardImg relative w-full h-[150px] md:h-[180px] lg:h-[250px] bg-[#EFEFEF] p-2"
      >
        <img
          class="w-full h-full object-contain scale-90 group-hover:scale-95 duration-300"
          :src="img"
          alt="img"
          srcset=""
        />
      </div>
    </div>
  </section>
  <!-- <div>
    <h1 class="text-3xl text-red-500 font-bold underline">Hello world!</h1>
  </div>
  <router-view></router-view> -->
</template>

<style scoped></style>
