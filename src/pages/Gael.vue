<template>
    <div id="Index" class="bg-white">

        <q-toolbar class="bg-grey-3 shrink">


            <q-toolbar-title class="q-ma-lg text-h5 text-weight-bolder ">
                <div align="center" class="q-mt-none text-h5 text-weight-bolder">
                    Colegio Francisto Villa
                </div>
                <div align="center" class="text-deep-orange text-weight-bolder text-h6" color="secondary">
                    Ingresa tu cuenta
                </div>
            </q-toolbar-title>

        </q-toolbar>

        <!-- -->
        <!-- <h1 v-if="publications == true">Pub</h1>
        <h1 v-if="payments == true">pago</h1>
        <h1 v-if="ratings == true">Calificaciones</h1>
        <h1 v-if="account == true">cuenta</h1> -->
            <div v-if="publications == true">
                 <div>
                    <q-scroll-area style="height: 700px; max-width: 480px;">
                        <div v-for="item in gael">
                             <q-card class="my-card" flat bordered>
                                <q-item>
                                    <q-item-section avatar>
                                        <q-avatar rounded>
                                            <img src="https://cdn.quasar.dev/img/avatar.png">
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>Titulo de la publicaion </q-item-label>
                                        <q-item-label caption>
                                            Espacio
                                        </q-item-label>
                                        <q-item-label caption>
                                            aaaa-mm-dd
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>

                                
                                
                            </q-card>
                    
                </div>
    </q-scroll-area>
                    <!-- <div v-for="item in gael">
                             <q-card class="my-card" flat bordered>
                                <q-item>
                                    <q-item-section avatar>
                                        <q-avatar rounded>
                                            <img src="https://cdn.quasar.dev/img/avatar.png">
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>Titulo de la publicaion </q-item-label>
                                        <q-item-label caption>
                                            Espacio
                                        </q-item-label>
                                        <q-item-label caption>
                                            aaaa-mm-dd
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>

                                
                                
                            </q-card>
                    
                </div> -->
                
            </div> 
            
        </div>



        <div class="q-mt-lx">
            <div class="row bg-grey-3 fixed-bottom absolute-bottom ">
                <div class="col q-ma-md">
                    <q-btn color="grey-4" text-color="deep-orange-5" icon="campaign" size="1.3em" @click="changueView(1)" />
                </div>
                <div class="col q-ma-md">
                    <q-btn color="grey-4" text-color="deep-orange-5" icon="paid" size="1.3em" @click="changueView(2)" />
                </div>
                <div class="col q-ma-md">
                    <q-btn color="grey-4" text-color="deep-orange-5" icon="school" size="1.3em" @click="changueView(3)" />
                </div>
                <div class="col q-ma-md">
                    <q-btn color="grey-4" text-color="deep-orange-5" icon="settings" size="1.3em" @click="changueView(4)" />
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
import ViewPublications from 'src/pages/views-app/Publications.vue';

// import { MsgError } from '../helpers/messages';

@Component({
    components: {
        ViewPublications,
    },
})
export default class Index extends Vue {
    authState = getModule(AuthStoreModule, this.$store);
    formValid: boolean = true;
    publications: boolean = true;
    payments: boolean = false;
    ratings: boolean = false
    account: boolean = false;
    stage: string = "";
    stage_open: string = '';
    gael: Array<any> = ["HTML", "CSS", "Javascript", "Terminal","asd","asddf","gae","mart","das","HTML", "CSS", "Javascript", "Terminal","asd","asddf","gae","mart","das","HTML", "CSS", "Javascript", "Terminal","asd","asddf","gae","mart","das"];


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



    async changueView(value: any) {
        if (value == 1) {
            this.stage = 'publications';
            this.publications = true,
                this.payments = false,
                this.account = false
            this.ratings = false
        }
        if (value == 2) {
            this.stage = 'payments';
            this.payments = true,
                this.publications = false,
                this.ratings = false
            this.account = false

        }
        if (value == 3) {
            this.stage = 'ratings';
            this.ratings = true
            this.payments = false
            this.publications = false
            this.account = false
        }
        if (value == 4) {
            this.stage = 'account'
            this.account = true
            this.ratings = false
            this.payments = false
            this.publications = false
        }
    }


    async mounted() {

        this.stage = this.stage_open || 'change_rol';
        this.changueView(this.stage == "publications" ? 1 : this.stage == "payments" ? 2 : 3);
    }



}
</script>

<style lang="scss">
#Index {
    height: 100vh;
    width: 100%;
    background-color: black;
}
</style>
