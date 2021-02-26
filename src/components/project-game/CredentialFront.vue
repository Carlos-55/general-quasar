<template>
<div>
    <div>
        <q-splitter v-model="splitterModel">

            <template v-slot:before>
                <q-tabs v-model="tab" align="left" vertical class="text-purple">
                    <q-tab name="mails" icon="assignment_ind" label="Ine de frente" />
                    <q-tab name="alarms" icon="article" label="ine al anverso" />
                    <q-tab name="innerMovies" icon="folder" label="Saber mas" />
                </q-tabs>
            </template>

            <template v-slot:after>
                <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                    <q-tab-panel name="mails" align="left">
                        <div align="left">
                            <div class="row">
                                <div class="col-8">
                                    <img src="../../assets/img/INE.png" height="500" width="850" id="map" @click="newEvent($event)" />
                                </div>
                                <div>
                                  <div class="text-h4 q-mb-md">Informacion</div>
                                   <p id="distance" ref="distance"></p>
                                </div>
                            </div>

                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="alarms">
                        <div class="text-h4 q-mb-md">Anverso del INE</div>
                        <div align="left">
                            <q-img src="../../assets/img/anverso.jpg" class="imagen"></q-img>
                        </div>

                    </q-tab-panel>

                    <q-tab-panel name="innerMovies">
                        <div class="text-h4 q-mb-md">Saber mas</div>
                        <q-card bordered class="shadow-10">
                            <q-carousel arrows animated swipeable :fullscreen.sync="fullscreen" infinite v-model="slide" height="500px">
                                <q-carousel-slide name="first" img-src="../../assets/img/credencial_frontal.png">
                                </q-carousel-slide>
                                <q-carousel-slide name="second" img-src="../../assets/img/credencial_anverso.png">
                                </q-carousel-slide>
                                <q-carousel-slide name="third" img-src="../../assets/img/vigencia.png">
                                </q-carousel-slide>
                                <template v-slot:control>
                                    <q-carousel-control position="bottom-right" :offset="[18, 18]">
                                        <q-btn push round dense color="purple-5" :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
                                    </q-carousel-control>
                                </template>
                            </q-carousel>
                        </q-card>
                    </q-tab-panel>
                </q-tab-panels>
            </template>
            <!--https://www.ine.mx/-->
        </q-splitter>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';

@Component
export default class PageGame extends Vue {
    alert: boolean = false;
    title: string = "";
    information: string = "";
    tab: string = 'mails';
    splitterModel: number = 20;
    show: boolean = true
    slide: string = 'first';
    fullscreen = false
    async mounted() {

    }

    newEvent(v: any) {
        console.log(v.x);
        if (v.x >= 500 && v.x <= 680) {
            document.getElementById('distance').innerHTML
            = "<p style="+"font-size:20px; font-weight: bold;"+">Fotografia instantanea y digital</p><div style='word-break: break-all;'>&nbsp;-La fotografía se apega a normas"
              +"internacionales en su posición."
              +"<br>- Fondo con tramas de alta resolución."
              +"·<br>- Tintas UV, ópticamente variables,"
              +"impresión arcoiris."
              +"·<br>- Datos variables en fotografía y microtextos."
              +"·<br>- Dispositivo ópticamente variable (OVD)."
              +"·<br>- El domicilio es opcional (calle, Número"
              +"exterior e interior)."
              +"*<br>- Aplica también para las emitidas desde el"
              +"extranjero</div>"
              + "<br><br>"
              + "* <b style='color:purple;'><u>Aplica también para las emitidas desde el extranjero</u></b>";
        } else if (v.x > 700 && v.x <= 850) {
            document.getElementById('distance').innerHTML = '<p style="font-size:20px; font-weight: bold;">Nombre completo</p> <br> <div>Identificar al elector.</div>';
        } else if (v.x >= 790 && v.x <= 1100) {
            document.getElementById('distance').innerHTML
            = "<p style='font-size:20px; font-weight: bold;'>Datos domiciliarios y personales</p> <br>"
            + "<p>En caso de extravio de la identificacion o de la persona se podra <br>saber a donde y quier regrersar la misma.</p>";
        } else if (v.x >= 1100 && v.x <= 1400) {
            document.getElementById('distance').innerHTML =
             "<h6>Fotografia fantasma</h6>"
            + "<p>El funcionamiento de la tinta e imagen es para el reconocimiento<br> a travez de informacion del propietario del la credencial</p>"
            + "<h6>Tinta OVI</h6>"
            + "<p>Tinta de seguridad que cambia de color segun la posicion y luz</p>";
        }
    }
}
</script>

<style>
.img {
    width: 100%;
}

.frameI {
    width: 100%;
    height: 10em;
}

.custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3)
}

.imagen {
    width: 48%;
    height: 30em;
}
</style>
