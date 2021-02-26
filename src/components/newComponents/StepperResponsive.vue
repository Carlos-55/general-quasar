<template>
<div>
    <div class="q-gutter-y-md" style="max-width: 500px">
        <q-card>
            <q-tabs v-model="tab" dense class="bg-purple text-white" indicator-color="bg-purple-1" align="justify" narrow-indicator>
                <q-tab name="mails" label="Ine delante" />
                <q-tab name="alarms" label="ine detras" />
                <q-tab name="movies" label="Movies" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="mails">
                    <div class="text-h6">INE de frente</div>
                    <br>
                    <div align="center">
                        <q-img src="../../assets/img/INE.png" class="img" id="map" @click="credentialFront($event)" />
                        <br>
                        <p id="distance" ref="distance"></p>

                    </div>

                </q-tab-panel>

                <q-tab-panel name="alarms">
                     <br>
                     <div class="text-h6">INE por detras</div>
                    <br>
                    <div align="center">
                        <q-img src="../../assets/img/anverso.jpg"
                        @click="credentialBack($event)"
                        />
                        <br>
                        <p id="anverso"></p>

                    </div>

                  </q-tab-panel>

                <q-tab-panel name="movies">
                    <div class="text-h6">Movies</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import CredentialFront from '../project-game/CredentialFront.vue';
@Component({
    components: {
        CredentialFront
    }
})
export default class Stepper extends Vue {
    tab: string = 'mails';
    alert: boolean = false;
    title: string = "";
    information: string = "";
    tab: string = 'mails';

    async mounted() {
    }
    openModal(title: string, information: any) {
        this.title = title;
        this.information = information;
        return this.alert = true;
    }

    credentialFront(v: any) {
        if (v.clientY >= 190 && v.clientX <= 150) {
            document.getElementById('distance')?.innerHTML = '<br><b><u>Fotografía instantanea y digital</u></b><div><br></div><div>Fotografia y todos los datos&nbsp;</div>';
        } else if (v.clientY >= 160 && v.clientX <= 160) {
            document.getElementById('distance')?.innerHTML = "<br><b><u>Nombre completo</u></b><div><br></div><div>Informacion personal&nbsp;</div>";
        } else if (v.clientY >= 140 && v.clientX <= 270) {
            document.getElementById('distance')?.innerHTML = "<br><b><u>Datos domiciliarios y personales</u></b><div><br></div><div>Informacion del domicilio&nbsp;</div>";
        } else if (v.clientY >= 200 && v.clientX <= 340) {
            document.getElementById('distance')?.innerHTML = "<br><b><u>Fotografia fantasma y tinta optica variable</u></b><div><br></div><div>Fotografia fantasma con datos variables&nbsp;</div>";
        }
    }


    credentialBack(evt: any){
      console.log(evt.x);
        if (evt.clientY >= 168 || evt.clientY <=  200) {
          document.getElementById('anverso')?.innerHTML = "<br>Espacio para marcado de votos";
       }
        if (evt.x >= 160 && evt.x <= 180) {
          document.getElementById('anverso')?.innerHTML = "<br>Codigo de barras y cifrado";
        }
         if (evt.x >= 270 && evt.x <= 300) {
           document.getElementById('anverso')?.innerHTML = "<br>Codigo de QR";
        }
        if (evt.x >= 141 && evt.x <=165) {
          document.getElementById('anverso')?.innerHTML = "<br>Firma digitalizada";
        }
      if (evt.x >= 192 && evt.x <= 230) {
        document.getElementById('anverso')?.innerHTML = "<br>Zona de lectura mecanica";
      }
    }

}
</script>

<style>
.img {
    width: 100%;
}
</style>
