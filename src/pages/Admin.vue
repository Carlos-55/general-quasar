<template>
	<AdminLayout :items="items">
		<router-view></router-view>
	</AdminLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdminLayout from '../layouts/MainLayout.vue';
import { Action } from 'vuex-module-decorators';
import { getModule } from 'vuex-module-decorators';
import { ModuleOptions } from 'vuex-module-decorators/dist/types/moduleoptions';

@Component({
	components: {
		AdminLayout,
	},
})
export default class Index extends Vue {
	items = [
		{
			title: 'Publicaciones',
			description: '',
			icon: require('../assets/icons/not_select/voice_not.svg'),
			url: '/admin/publication',
		},
		{
			title: 'Pagos',
			description: '',
			icon: require('../assets/icons/not_select/money_not.svg'),
			url: '/admin/payment',
		},
		{
			title: 'Calificaciones',
			description: '',
			icon: require('../assets/icons/not_select/graduation_not.svg'),
			url: '/admin/gears',
		},
		{
			title: 'Usuarios',
			description: '',
			icon: require('../assets/icons/not_select/gears_not.svg'),
			url: '/admin/raiting',
		},
	];
}
</script>

<style lang="scss" scope></style>
