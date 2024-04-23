import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
	{
		path: '/',
		meta: { requiresNoAuth: true, },
		component: () => import('pages/Login.vue'),
	},
	{
		path: '/admin',
		component: () => import('pages/Admin.vue'),
		// meta: { requiresAuth: true },
		meta: { requiresNoAuth: false },
		children: [
			{ path: '', component: () => import('pages/FindSchool.vue') },
			{ path: 'correct', component: () => import('pages/FindCorrect.vue') },
			{ path: 'error', component: () => import('pages/FindError.vue') },
			{ path: 'school', component: () => import('pages/Gael.vue') },
			{ path: 'publication', component: () => import('pages/views-app/Publications.vue') },
			{ path: 'payment', component: () => import('pages/views-app/Payments.vue') },
			{ path: 'gears', component: () => import('pages/views-app/Gears.vue') },
			{ path: 'raiting', component: () => import('pages/views-app/Raiting.vue') },
		]
	}
];

// Always leave this as last one
// @ts-ignore
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('pages/Error404.vue')
	});
}

export default routes;
