<template>
<div class="col-md-6 col-12">
    <div class="q-my-lg" align="Center">
        <div class="q-pt-md">
            <q-btn unelevated class="q-my-sm text-black" no-caps @click="onSubmit()" color="amber-7">A pagar: ${{
                    totalPago }}
            </q-btn>
        </div>
    </div>

    <q-list separator>
        <q-separator />
        <q-item tag="label" v-ripple>
            <q-item-section avatar>
                <q-radio v-model="totalPago" val="15,000" color="orange"></q-radio>
            </q-item-section>
            <q-item-section>
                <q-item-label>Nombre de todo el pago - es una cosa extensa que tiene mucho texto y se lleva como 3 renglones
                </q-item-label>
                <q-item-label caption>Juan Arturo Flores Hernandez <br> $ 1,684.87 </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced inset></q-separator>

        <q-item tag="label" v-ripple>
            <q-item-section avatar>
                <q-radio v-model="totalPago" val="500" color="orange"></q-radio>
            </q-item-section>
            <q-item-section>
                <q-item-label>Nombre de todo el pago - es una cosa extensa que tiene mucho texto y se lleva como 3 renglones
                </q-item-label>
                <q-item-label caption>Juan Arturo Flores Hernandez <br> $ 1,684.87 </q-item-label>
            </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
            <q-item-section avatar>
                <q-radio v-model="totalPago" val="20" color="orange"></q-radio>
            </q-item-section>
            <q-item-section>
                <q-item-label>Nombre de todo el pago - es una cosa extensa que tiene mucho texto y se lleva como 3 renglones
                </q-item-label>
                <q-item-label caption>Juan Arturo Flores Hernandez <br> $ 1,684.87 </q-item-label>
            </q-item-section>
        </q-item>
        <q-separator />

    </q-list>

    <q-dialog v-model="dialogFlag" persistent>
        <q-card style="min-width: 280px; min-height: 250px">

            <!-- <q-card-section class="q-pt-xl flex flex-center">
                    <div class="flex flex-center ">
                        <q-avatar size="7em">
                            <q-img></q-img>
                        </q-avatar>
                    </div>

                </q-card-section> -->
            <q-card-section class="q-pt-sm flex flex-center">
                <div class="q-pa-sm text-h5 text-bold flex flex-center ">Pagar ${{ totalPago }} con
                </div>

            </q-card-section>

            <q-card-actions align="center" class="text-black q-pt-lg">
                <q-btn class="text-black text-weight-bold" size="12px" color="amber-7" no-caps @click="" label="Tarjeta" v-close-popup style="width: 80px;"></q-btn>
            </q-card-actions>
            <q-card-actions align="center" class="text-black q-pt-sm">
                <q-btn class="text-black text-weight-bold" size="12px" color="amber-7" no-caps @click="" label="Ventanilla Bancaria" v-close-popup style="width: 120px;"></q-btn>
            </q-card-actions>
            <q-card-actions align="center" class="text-black q-pt-sm ">
                <q-btn class="text-black text-weight-bold" size="12px" color="amber-7" no-caps @click="" label="Tranferencia SPEI" v-close-popup style="width: 120px;"></q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>

    <!-- <div v-for="item in gael">
        <q-item clickable v-ripple>
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
      </q-item>  
        </div>
       -->
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import {
    DialogPayment
} from '../../helpers/messages';

//@ts-ignore
@Component({
    components: {}
})
export default class ViewPayments extends Vue {
    gael: Array < any > = ["asddf", "gae", "mart", "das", "HTML", "CSS"];
    totalPago: any = 0
    color: any = '';
    dialogFlag: boolean = false;

    async mounted() {
        ;

    }

    async onSubmit() {
        // return;
        // if (!this.formValid)
        console.log('=========================>', this.dialogFlag);
        this.dialogFlag = true;
        console.log('=========================>', this.dialogFlag);

        // return DialogPayment(
        // 	this.totalPago,
        // );
        // await this.authState.login(this.auth);
        // if (this.authState.isAuth) {
        // 	this.$router.push('/admin');
        // }
    }

}
</script>
