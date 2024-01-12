<script setup lang="ts">
import { ref } from "vue";
import t1 from "../../assets/img/mr-dilshod.jpg";
import t2 from "../../assets/img/mr_olimjon.jpg";
import t3 from "../../assets/img/mr_otabek.jpg";
import t4 from "../../assets/img/ms-madina.jpg";

const teachers = ref([t1, t2, t3, t4]);

const product = ref();
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    (product.value = json), console.log(json);
  });
</script>

<template>
  <section class="container">
    <h1
      class="text-[sm] sm:text-[sm] md:text-[md] lg:text-[37px] ml-1 sm:ml-2 md:ml-5 lg:ml-9 font-bold text-center mt-7"
    >
      BIZNING O`QITUVCHILAR
    </h1>
    <div class="flex flex-wrap justify-center gap-1 mb-10">
      <div
        class="group card w-[45%] md:w-[30%] lg:w-[22%] border rounded-sm p-1 sm:mt-2 mt-1 md:mt-5 lg:mt-9 hover:shadow-lg duration-200"
        v-for="(img, index) in teachers"
        :key="index"
      >
        <div
          class="cardImg relative w-full h-[150px] md:h-[180px] lg:h-[250px] bg-[#FFC107]"
        >
          <img
            class="w-full h-full object-contain scale-90 group-hover:scale-95 duration-300"
            :src="img"
            alt="img"
            srcset=""
          />
        </div>
        <div class="cardInfo">
          <div class="name flex gap-2 items-center">
            <span
              class="w-[2px] sm:w-[3px] md:w-[4px] lg:w-[5px]h-full text-[#FFC107] bg-[#FFC107]"
              >.</span
            >
            <p
              class="text-sm sm:text-[sm] md:text-[md] lg:text-[xl] font-bold mt-0 sm:mt-2 md:mt-5 lg:mt-9"
            >
              Mr.Dilshod
            </p>
          </div>

          <div class="bioInfo p-2 mt-2">
            <p class="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]">
              -Tajriba: 11 yil
            </p>
            <p class="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]">
              - Yutuqlari: ICCR g'olibi
            </p>
            <p class="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]">
              - Hindistonning Pune universitetida iqtisod bo'yicha bakalavr
              darajasi. MDISdan marketing bo'yicha magistr darajasi
            </p>
            <p class="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]">
              - Maqsadli, faol, mehnatsevar, mas'uliyatli, yorqin hazil tuyg'usi
              bilan
            </p>
            <p class="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px]">
              - O'quvchilar: 10000+
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
