// 管理端路由
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Manage = resolve => {
	require.ensure(['../views/manage/index.vue'], () => {
		resolve(require('../views/manage/index.vue'))
	})
}
export default [{
	path: '/manage',
	name: 'manage',
	component: Manage
}]