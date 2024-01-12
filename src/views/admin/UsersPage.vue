<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home Page</h1>
    <button @click="fetchData">Get Data from Server</button>
    <div v-if="data">
      <h2>Data from Server:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { fetchData } from "../api/api";

export default {
  setup() {
    const data = ref(null);

    const fetchDataFromServer = async () => {
      try {
        const result = await fetchData("/api/data"); // Serverning ma'lumotlar manzili
        data.value = result;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    return { data, fetchDataFromServer };
  },
};
</script>
