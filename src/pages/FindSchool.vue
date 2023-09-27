<template>
	<div id="FindSchool" class="bg-white">
		<div class="row justify-center items-center ">
			<div align="center" class="q-mt-xl text-h5 text-weight-bolder" >
				Busca tu escuela
			</div>
		</div>
		<div align="center" class="q-mt-lg text-h7 text-weight-medium" color="secondary">
				Escribe el identificador de tu escuela <br> (ejemplo ENM8)
			</div>
		
		<div class="fit justify-center items-center">
			
			<div class="col-10 col-sm-5 col-md-3 col-lg-2">
                <q-input
                    class="col-12 q-px-xl q-pt-md"
                    filled
                    bg-color="grey-3" 
                    label-color="black"
                    lazy-rules
                    label="Escriba a qui"
                />
				<!-- class: 'col-12 q-px-xl q-pt-md', -->

				<!-- <FormFlex
					:fields="fields"
					:loader="authState.loader"
					@onValidation="changeValidation"
					:model="auth"
					@onSubmit="onSubmit"
				/> -->
				<div align="Center">
					<div class="q-px-sm">
						<q-btn
							unelevated 
							class="q-my-sm text-black"
							@click="onSubmit"
							color="amber-7"
							>Continua</q-btn
						>
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
export default class FindSchool extends Vue {
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
		// }
	}
	changeValidation(isValid: boolean) {
		if (this.formValid != isValid) {
			this.formValid = isValid;
		}
	}
	fields = [
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
#FindSchool {
	height: 100vh;
	width: 100%;
	background-color:black;
}
</style>
