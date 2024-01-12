<template>
	<div>
		<Navbar />
		<router-view></router-view>
		<Price/>
		<Booking/>
	</div>
</template>

<script setup lang="ts">
import Navbar from "../views/user/Navbar.vue";
import Price from "../views/user/Price.vue";
import Booking from "../views/user/Booking.vue";
</script>

<style scoped></style>
