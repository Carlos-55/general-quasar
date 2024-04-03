<template>
	<div id="Login" class="bg-white">
		<div class="row justify-center items-center ">
			<div align="center" class="q-mt-lg text-h5 text-weight-bolder" >
				Colegio Francisto Villa 
			</div>
		</div>
		<div align="center" class="q-mt-lg text-deep-orange text-weight-bolder text-h6" color="secondary">
				Ingresa tu cuenta 
			</div>
		
		<div class="row justify-center">
			
			<div class="col-12 col-md-4">
				
				<FormFlex
					:fields="fields"
					:loader="authState.loader"
					@onValidation="changeValidation"
					:model="auth"
					@onSubmit="onSubmit"
				/>
				<div align="Center">
					<div class="q-px-sm">
						<q-btn
							unelevated 
							class="q-my-sm text-black"
							@click="onSubmit"
							color="amber-7"
							no-caps
							>Ingresa</q-btn
						>
					</div>
					<div class="q-px-sm">
						<q-btn
							unelevated 
							class="q-my-sm text-black"
							@click="onSubmit"
							color="grey-4"
							no-caps
							>Inicio</q-btn
						>
					</div>
					<div class="row justify-betwen q-pt-lg">
						<div class="col-3"></div>
						<div class="col-6 text-h6 text-weight-bold">Términos de Uso Privacidad</div>
					</div>
				</div>				
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormFlex from 'components/FormFlex.vue';
import { getModule } from 'vuex-module-decorators';
import { AuthStoreModule } from '../store/modules/auth';
import { ValidationsForm } from '../helpers/validations';
import { DialogPersonal } from '../helpers/messages';
// import { MsgError } from '../helpers/messages';

@Component({
	components: {
		FormFlex,
	},
})
export default class Login extends Vue {
	authState = getModule(AuthStoreModule, this.$store);
	formValid: boolean = false;
	auth = {};
	async onSubmit() {
		// return;
		// if (!this.formValid)
		// 	return DialogPersonal(
		// 		'Info',
		// 		'Verifica los datos de tu formulario'
		// 	);
		// await this.authState.login(this.auth);
		// if (this.authState.isAuth) {
			this.$router.push('/admin');
			// console.log('es aqui ');
			
		// }
	}
	changeValidation(isValid: boolean) {
		if (this.formValid != isValid) {
			this.formValid = isValid;
		}
	}
	fields: any = [
		{
			type: 'text',
			label: 'Usuario',
			key: 'user',
			field: {
				class: 'col-12 q-px-xl q-pt-md',
			},
			props: {
				dark: true,
			},
			rules: [...ValidationsForm.reqEmail],
		},
		{
			type: 'password',
			label: 'Contraseña',
			key: 'password',
			isPassword: true,
			field: {
				class: 'col-12 q-px-xl',
			},
			props: {
				type: 'password',
				dark: true,
			},
			rules: [...ValidationsForm.req],
		},
	];
}
</script>

<style lang="scss">
#Login {
	height: 100vh;
	width: 100%;
	background-color:black;
}
</style>
