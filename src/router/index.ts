import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import user from "./user";
import admin from "./admin";
import not_found from "./not_found";
import auth from "./auth";

const routes: Array<RouteRecordRaw> = [user, admin, not_found, auth];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

// shu yerda agar token bo'lmasa admin pagega kiritmaydi
router.beforeEach((to, from, next) => {
	const token = localStorage.getItem("token");

	if (!token && to.meta.requiresAuth) return next({ path: "/login" });
	else if (token && to.path == "/login") return next({ path: "/admin" });

	return next();
});

export default router;
