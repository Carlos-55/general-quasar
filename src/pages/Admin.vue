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
			title: 'Inicio',
			description: 'Muestra el inicio',
			url: '/admin',
		},
		{
			title: 'Usuarios',
			description: 'Muestra los usuarios',
			url: '/admin/usuarios',
		},
		{
			title: 'Roles',
			description: 'Muestra los usuarios',
			url: '/admin/roles',
		},
		{
			title: 'Calendario',
			description: 'Muestra un calendario completo',
			url: '/admin/calendary',
		},
		{
			title: 'Ubicacion Actual',
			description: 'Mostramos la ubicacion del usuario',
			url: '/admin/localization'
		}
	];
}
</script>

<style lang="scss" scope></style>
