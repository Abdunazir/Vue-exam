export default {
	path: "/:catchAll(.*)*",
	name: "not_found_page",
	component: () => import("../views/NotFound/NotFound.vue"),
};
