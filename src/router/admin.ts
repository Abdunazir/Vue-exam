export default {
	path: "/admin",
	name: "admin_layout",
	component: () => import("../layouts/AdminLayout.vue"),
	children: [
		{
			path: "users",
			name: "admin_user_page",
			component: () => import("../views/admin/UsersPage.vue"),
		},
		// shu yerda userning boshqa pagelari route lari yoziladi
	],
	meta: {
		requiresAuth: true,
	},
};
