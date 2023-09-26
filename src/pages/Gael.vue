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
            <!-- <div v-if="publications == true">
                 <div>
                    <q-scroll-area style="height: 400px; max-width: 480px;">
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
          
            </div> 
            
        </div> -->
        
        <div v-if="publications == true">
            <ViewPublications></ViewPublications>
        </div>
        
      <!-- <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <div class="">
            <q-item-section></q-item-section>
            <q-item-section class="text-subtitle2 text-weight-bold">Titulo de la publicaion</q-item-section>
            <q-item-section>Espacio</q-item-section>
            <q-item-section>26/sep/2023</q-item-section>

        </div>

        
      </q-item> -->


        <div class="q-mt-lx">
            <div class="row bg-grey-3 fixed-bottom absolute-bottom ">
                <div class="col q-ma-md">
                    <!-- <q-btn color="grey-4" text-color="deep-orange-5" icon="campaign" size="1.3em" @click="changueView(1)" /> -->
                        <button :style="$q.screen.lt.md ? 'width : 100%; font-size:14px' : ''"
                                :class="stage == '' ? 'succes_one' : 'button'"
                                id="rol"
                                @click="changueView(1)">
                        </button>
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
.button{
  color : rgba(0, 0, 0, 0.256);
  border-radius: 4px 4px 4px 4px;
  border: 1px solid rgb(233, 233, 233);
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding: 25px 32px;
  background-color:rgb(216, 216, 216);

}
.button:active{
  background-color:rgb(249, 225, 44);
  border: 2px solid rgb(236, 211, 24);
  color : white;
  text-align: center;
}
.succes_one{
  background-color:rgb(236, 211, 24);
  border: 2px solid rgb(236, 211, 24);
  color : white;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  padding: 4px 55px;
  border-radius: 8px 8px 0px 0px;
}
.button:focus{
    background-color:rgb(255, 183, 0);
    border: 1px solid rgb(226, 219, 219);
    color : white;
    text-align: center;
}
</style>
