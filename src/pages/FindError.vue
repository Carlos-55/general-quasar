<template>
    <div id="Login" class="bg-white">
        <div class="row justify-center items-center ">
            <div align="center" class="q-mt-lg text-h5 text-weight-bolder">
            </div>
        </div>

        <div align="center" class="q-mt-lg text-deep-orange text-weight-bolder text-h6" color="secondary">
            Intenta de nuevo.<br>
            Ese identificador no Existe
        </div>

        <div class="fit justify-center items-center">

            <div class="col-10 col-sm-5 col-md-3 col-lg-2">
                <div align="Center">
                    <div class="q-pt-md">
                        <q-btn unelevated class="q-my-sm text-black" @click="onSubmit" color="amber-7">Intenta de Nuevo</q-btn>
                    </div>
                    <div class="q-pt-none">
                        <q-btn unelevated class="q-my-sm text-black" @click="onSubmit" color="grey-4">Inicio</q-btn>
                    </div>
                    <div class="q-pt-none">
                        <q-btn unelevated class="q-my-sm text-black" @click="onSubmit" color="grey-4">Pide ayuda</q-btn>
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
        if (!this.formValid)
            return DialogPersonal(
                'Info',
                'Verifica los datos de tu formulario'
            );
        await this.authState.login(this.auth);
        if (this.authState.isAuth) {
            this.$router.push('/admin');
        }
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
#Login {
    height: 100vh;
    width: 100%;
    background-color: black;
}
</style>
