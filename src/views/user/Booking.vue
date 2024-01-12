<template>
  <div class="container mx-auto mt-8 back p-8">
    <div class="max-w-md mx-auto backdrop-blur-lg p-8 rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Birinchi darsga yoziling!</h2>
      
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-600">Ism</label>
        <input v-model="user.name" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md">
      </div>
      
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-600">Telefon Raqam</label>
        <input v-model="user.phone" type="tel" id="phone" name="phone" class="mt-1 p-2 w-full border rounded-md">
      </div>
      
      <div class="mb-4">
        <label for="course" class="block text-sm font-medium text-gray-600">Mamlakat</label>
        <select v-model="user.course" id="course" name="course" class="mt-1 p-2 w-full border rounded-md">
          <option value="" disabled selected>Tanlang</option>
          <option value="ielts">IELTS</option>
          <option value="ingliz_tili">INGLIZ TILI</option>
          <option value="korporativ">KORPORATIV</option>
          <!-- Qo'shimcha mamlakatlar -->
        </select>
      </div>

      <button @click="submitForm" class="bg-blue-500 text-white p-2 rounded-md">Ro'yhatdan o'tish</button>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { ref } from 'vue';

const user = ref({
  name: '',
  phone: '',
  course: '' as string // Type assertion
});

function submitForm(){
    console.log("Helo");
}
</script>

<style scoped>
.back{
  background-image: url("../../assets/img/1-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
/* Tailwind CSS yoki boshqa stilni kerakli bo'limda import qilishingiz mumkin */
</style>
