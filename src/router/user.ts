export default {
	path: "/",
	name: "user_layout",
	redirect: "/home",
	component: () => import("../layouts/UserLayout.vue"),
	children: [
		{
			path: "/home",
			name: "user_home_page",
			component: () => import("../views/user/HomePage.vue"),
		},
		{
			path: "/about",
			name: "user_about_page",
			component: () => import("../views/user/AboutUs.vue"),
		},
		{
			path: "/price",
			name: "user_price_page",
			component: () => import("../views/user/Price.vue"),
		},
		{
			path: "/teachers",
			name: "user_teachers_page",
			component: () => import("../views/user/TeachersPage.vue"),
		},
		{
			path: "/contact",
			name: "user_contact_page",
			component: () => import("../views/user/ContactPage.vue"),
		},
		// shu yerda userning boshqa pagelari route lari yoziladi
	],
};
