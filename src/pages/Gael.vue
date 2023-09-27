<template>
    <div id="Index" class="bg-white">

        <!-- <q-toolbar class="bg-grey-3 shrink">


            <q-toolbar-title class="q-ma-lg text-h5 text-weight-bolder ">
                <div align="center" class="q-mt-none text-h5 text-weight-bolder">
                    Colegio Francisto Villa
                </div>
                <div align="center" class="text-deep-orange text-weight-bolder text-h6" color="secondary">
                    {{publications == true ? 'Publicaciones': payments == true ?'Pagos': ratings == true ? 'Boleta de calificaiones':'Cuenta' }}
                </div>
            </q-toolbar-title>

        </q-toolbar> -->


        <div v-if="publications">
            <ViewPublications></ViewPublications>
        </div>
        <div v-if="payments">
            <ViewPayments></ViewPayments>
        </div>
        <div v-if="ratings">
            <ViewRaiting></ViewRaiting>
        </div>
        <div v-if="account">
            <ViewGears></ViewGears>
        </div>



<!-- 
        <div class="q-mt-lx">
            <div class="row bg-grey-3 fixed-bottom absolute-bottom ">
                <div class="col q-ma-md">
                    <button :style="$q.screen.lt.md ? 'width : 100%; font-size:14px' : ''"
                    icon="open"
                    :class="stage == 'publications' ? 'succes_one' : 'button'" id="rol" @click="changueView(1)">

                    <div v-if="publications">
                    <img src="../assets/icons/select/voice.svg">
                    </div>
                    <div v-if="!publications">
                            <img src="../assets/icons/not_select/voice_not.svg">
                        </div>
                        
                    </button>
                </div>
                <div class="col q-ma-md">
                    <button :style="$q.screen.lt.md ? 'width : 100%; font-size:14px' : ''"
                        :class="stage == 'payments' ? 'succes_one' : 'button'" id="rol" @click="changueView(2)">
                        <div v-if="payments">
                            <img src="../assets/icons/select/money.svg">
                        </div>
                        <div v-if="!payments">
                            <img src="../assets/icons/not_select/money_not.svg">
                        </div>
                    </button>
                </div>
                <div class="col q-ma-md">
                    <button :style="$q.screen.lt.md ? 'width : 100%; font-size:14px' : ''"
                        :class="stage == 'ratings' ? 'succes_one' : 'button'" id="rol" @click="changueView(3)">
                    
                        <div v-if="ratings">
                            <img src="../assets/icons/select/education.svg">
                        </div>
                        <div v-if="!ratings">
                            <img src="../assets/icons/not_select/graduation_not.svg">
                        </div>
                    </button>
                </div>
                <div class="col q-ma-md">
                    <button :style="$q.screen.lt.md ? 'width : 100%; font-size:14px' : ''"
                        :class="stage == 'account' ? 'succes_one' : 'button'" id="rol" @click="changueView(4)">
                            
                        <div v-if="account">
                            <img class="icono" src="../assets/icons/select/gears.svg">
                        </div>
                        <div v-if="!account">
                            <img src="../assets/icons/not_select/gears_not.svg">
                        </div>

                    </button>
                </div>

            </div>


        </div> -->



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
import ViewPayments from 'src/pages/views-app/Payments.vue'
import ViewGears from 'src/pages/views-app/Gears.vue'
import ViewRaiting from 'src/pages/views-app/Raiting.vue';

// import { MsgError } from '../helpers/messages';

@Component({
    components: {
        ViewPublications,
        ViewPayments,
        ViewGears,
        ViewRaiting
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
    gael: Array<any> = ["HTML", "CSS", "Javascript", "Terminal", "asd", "asddf", "gae", "mart", "das", "HTML", "CSS", "Javascript", "Terminal", "asd", "asddf", "gae", "mart", "das", "HTML", "CSS", "Javascript", "Terminal", "asd", "asddf", "gae", "mart", "das"];


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

        this.stage = this.stage_open || 'publications';
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

.button {
    color: rgba(0, 0, 0, 0.256);
    border-radius: 6px 6px 6px 6px;
    border: 1px solid rgb(233, 233, 233);
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    padding: 25px 32px;
    background-color: rgb(216, 216, 216);
    height: 8vh;
    display: grid;
    justify-content: center;
    margin: auto;
    padding-top: 13%;

}

.button:active {
    background-color: rgb(249, 225, 44);
    border: 2px solid rgb(236, 211, 24);
    color: white;
    text-align: center;
    height: 8vh;
    display: grid;
    justify-content: center;
    margin: auto;
    padding-top: 13%;
}

.succes_one {
    background-color: rgb(255, 183, 0);
    border: 1px solid rgb(255, 183, 0);
    // color: white;
    // text-align: center;
    cursor: pointer;
    // font-weight: bold;
    // font-size: 15px;
    padding: 25px 32px;
    border-radius: 6px 6px 6px 6px;
    height: 8vh;
    display: grid;
    justify-content: center;
    margin: auto;
    padding-top: 13%;    


}


.button:focus {
    
    background-color: rgb(255, 183, 0);
    background-image:url(../assets/icons/select/voice.svg);
    border: 1px solid rgb(226, 219, 219);
    color: white;
    text-align: center;
}
.icono{ 
}
</style>
