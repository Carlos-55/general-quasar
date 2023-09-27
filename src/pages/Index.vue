<template>
    <div id="Index" class="bg-white">
        <div class="row justify-center items-center ">
            <div align="center" class="q-mt-lg text-h5 text-weight-bolder">
            </div>
        </div>

        <div align="center" class="q-pt-xl text-deep-orange text-weight-bolder text-h6" color="secondary">
            <img src="../assets/image_font.svg">
        </div>

        <div class="fit justify-center items-center">

            <div class="col-10 col-sm-5 col-md-3 col-lg-2">

                <div align="center" class="q-pt-xl text-deep-orange text-weight-bolder text-h6" color="secondary">
                    <img src="../assets/school_logo.svg">
                </div>

                <div align="Center">
                    <div class="q-pt-md">
                        <q-btn unelevated class="q-my-sm text-black" no-caps @click="onSubmit" color="amber-7">Buscar tu escuela</q-btn>
                    </div>
                    <div class="q-pt-lg">
                        <q-btn unelevated class="q-my-sm text-black" no-caps @click="onSubmit" color="grey-4">Registrar tu escuela</q-btn>
                    </div>
                    <div class="q-pt-none">
                        <q-btn unelevated class="q-my-sm text-black" no-caps @click="onSubmit" color="grey-4">Pide ayuda</q-btn>
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
import { log } from 'console';
// import { MsgError } from '../helpers/messages';

@Component({
    components: {
        FormFlex,
    },
})
export default class Index extends Vue {
    authState = getModule(AuthStoreModule, this.$store);
    formValid: boolean = true;
    auth = {};
    async onSubmit() {
        // return;
        // if (!this.formValid)
        //     return DialogPersonal(
        //         'Info',
        //         'Verifica los datos de tu formulario'
        //     );
        // await this.authState.login(this.auth);
        // if (this.authState.isAuth) {
            // this.$router.push('/find-school');
            this.$router.push('/find-school')
        // }
    }
    // onSubmit(){
    //     console.log('hola jkaja ');
        
    // }
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
#Index {
    height: 100vh;
    width: 100%;
    background-color: black;
}
</style>
