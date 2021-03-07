<template>
<div>
    <div class="q-gutter-y-md" style="max-width: 500px">
        <q-card>
            <q-tabs v-model="tab" dense class="bg-purple text-white" indicator-color="bg-purple-1" align="justify" narrow-indicator>
                <q-tab name="mails" label="Ine delante" />
                <q-tab name="alarms" label="ine detras" />
                <q-tab name="movies" label="Partidos" />
                <q-tab name="result" label="Resultados" />
                <q-tab name="PDF" label="PDF"/>
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
                        <q-img src="../../assets/img/anverso.jpg" @click="credentialBack($event)" />
                        <br>
                        <p id="anverso"></p>

                    </div>

                </q-tab-panel>

                <q-tab-panel name="movies">
                    <div class="text-h6"> Partidos politicos.
                        <!-- <q-btn color="primary" round dense no-caps icon="info" @click="small = true"> -->
                        <q-badge color="orange" @click="small = true" transparent>Instrucciones</q-badge>
                        <!-- </q-btn> -->
                    </div>
                    <div>
                        <div>
                            <div class="row">
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/prd.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div class="col-xs-4">
                                            <q-checkbox keep-color v-model="partido" label="PRD" val="PRD" color="yellow"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/pan.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div>
                                            <q-checkbox keep-color v-model="partido" label="PAN" val="PAN" color="blue" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/pri.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div>
                                            <q-checkbox keep-color v-model="partido" label="PRI" val="PRI" color="green" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <q-avatar size="100px" square>
                                            <q-img src="../../assets/partidos/movimiento.png" class="imagenes" />
                                        </q-avatar>
                                    </div>
                                    <div>
                                        <q-checkbox keep-color v-model="partido" label="Naranja" val="Naranja" color="orange" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <q-avatar size="100px" square>
                                            <q-img src="../../assets/partidos/morena.png" class="imagenes" />
                                        </q-avatar>
                                    </div>
                                    <div>
                                        <q-checkbox keep-color v-model="partido" label="Morena" val="Morena" color="red" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <q-avatar size="100px" square>
                                            <q-img src="../../assets/partidos/pes.png" class="imagenes" />
                                        </q-avatar>

                                    </div>
                                    <div>
                                        <q-checkbox keep-color v-model="partido" label="PES" val="PES" color="purple" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/pt.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div>
                                            <q-checkbox keep-color v-model="partido" label="PT" val="PT" color="amber-10" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <q-avatar size="100px" square>
                                            <q-img src="../../assets/partidos/rsp.png" class="imagenes" />
                                        </q-avatar>
                                    </div>
                                    <div>
                                        <q-checkbox keep-color v-model="partido" label="RSP" val="RSP" color="grey" />
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/social.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div>
                                            <q-checkbox keep-color v-model="partido" label="Social" val="Social" color="blue-10" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="row">
                                        <div>
                                            <q-avatar size="100px" square>
                                                <q-img src="../../assets/partidos/verde.png" class="imagenes" />
                                            </q-avatar>
                                        </div>
                                        <div>
                                            <q-checkbox keep-color v-model="partido" label="Verde" val="Verde" color="teal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div align="right">
                        <!-- <q-btn class="flat" color="purple" icon="add" round></q-btn> -->
                        <div class="q-pa-md" align="left">
                            <q-btn v-morph:btn:mygroup:300.resize="morphGroupModel" push class="absolute-bottom-right q-ma-md" rounded color="purple" size="lg" label="Guardar" no-caps @click="nextMorph" />

                            <q-card v-morph:card1:mygroup:500.resize="morphGroupModel" bordered class="absolute-bottom-left q-ma-md bg-purple text-white" style="width: 300px; border-bottom-left-radius: 2em">
                                <q-card-section class="text-h6">
                                    Estos partidos elegiste
                                </q-card-section>

                                <q-card-section class="text-subtitle1">
                                  <q-scroll-area
                                    :thumb-style="thumbStyle"
                                    :bar-style="barStyle"
                                    style="height: 200px;"
                                    class="col"
                                    ref="first"
                                  >
                                    <q-list bordered separator>
                                        <q-item v-for="(item, index) in partido" :key="index" class="q-my-sm" clickable v-ripple>
                                          <q-item-section>
                                            <q-item-label>{{ item }}</q-item-label>
                                          </q-item-section>
                                           <q-item-section side>
                                              <q-icon name="check_circle" color="green" />
                                            </q-item-section>
                                        </q-item>
                                      </q-list>
                                      </q-scroll-area>
                                </q-card-section>

                                <q-card-actions align="right">
                                    <q-btn label="Limpiar" color="red" push  @click="clean" />
                                    <q-btn label="Guardar" color="green" push @click="addLocal" />
                                    <q-btn label="Cerrar" color="primary" push @click="nextMorph" />
                                </q-card-actions>
                            </q-card>


                        </div>
                    </div>
                </q-tab-panel>
                <q-tab-panel name="result">
                    <div class="text-h6">Resultados</div>
                    <div v-for="(item, index) in arrayComplete" :key="index">
                     <q-list bordered separator>
                        <q-item clickable v-ripple>
                        <q-item-section>{{item.name}}</q-item-section>
                         <q-item-section side>
                            <q-icon :name="item.icon"  :color="(item.icon == 'check') ? 'green' : 'red'" />
                          </q-item-section>
                        </q-item>
                    </q-list>
                    </div>
                    <div class="q-pa-md" align="right">
                      <div class="row">
                        <div class="col-md-2">Resultado: {{count}}</div>
                        <div class="col">
                          <q-btn @click="result">Veamos</q-btn>
                        </div>
                      </div>
                    </div>
                </q-tab-panel>
            <q-tab-panel name="PDF">
                <div class="q-pa-md pdfs">
                <q-pdfviewer
                  v-model="show"
                  src="'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf'"
                  type="pdfjs"
                  content-class="absolute"
                />
----------------
                <template>
                  <div class="container q-pa-lg">
                    <q-pdfviewer
                      v-model="show"
                      :src="src"
                      type="html5"
                      content-class="fit container"
                      inner-content-class="fit container"
                    />
                  </div>
                </template>
                </div>
            </q-tab-panel>
            </q-tab-panels>
        </q-card>
        <q-dialog v-model="small">
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-h6">Instrucciones</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Selecciona los partidos que van en alianza
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="Cerrar" color="red" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</div>
</template>

<script lang="ts">
import { NotifyPersonal } from 'src/helpers/messages';
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
    small = false
    partido: any = [];
    resultados: any = "";
    morphGroupModel: any = 'btn';
    nextMorphStep: any = {
        btn: 'card1',
        card1: 'btn'
    }
     thumbStyle = {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }

      barStyle = {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
      partResult: any = "";
      arrayComplete: any = [];
      count = 0;
      show: boolean = true;
      src = 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf';
    async mounted() {}
    openModal(title: string, information: any) {
        this.title = title;
        this.information = information;
        return this.alert = true;
    }

    credentialFront(v: any) {
        if (v.clientY >= 190 && v.clientX <= 150) {
            //@ts-ignore
            document.getElementById('distance')?.innerHTML = '<br><b><u>Fotografía instantanea y digital</u></b><div><br></div><div>Fotografia y todos los datos&nbsp;</div>';
        } else if (v.clientY >= 160 && v.clientX <= 160) {
            //@ts-ignore
            document.getElementById('distance')?.innerHTML = "<br><b><u>Nombre completo</u></b><div><br></div><div>Informacion personal&nbsp;</div>";
        } else if (v.clientY >= 140 && v.clientX <= 270) {
            //@ts-ignore
            document.getElementById('distance')?.innerHTML = "<br><b><u>Datos domiciliarios y personales</u></b><div><br></div><div>Informacion del domicilio&nbsp;</div>";
        } else if (v.clientY >= 200 && v.clientX <= 340) {
            //@ts-ignore
            document.getElementById('distance')?.innerHTML = "<br><b><u>Fotografia fantasma y tinta optica variable</u></b><div><br></div><div>Fotografia fantasma con datos variables&nbsp;</div>";
        }
    }

    credentialBack(evt: any) {
        console.log(evt.x);
        if (evt.clientY >= 168 || evt.clientY <= 200) {
            //@ts-ignore
            document.getElementById('anverso')?.innerHTML = "<br>Espacio para marcado de votos";
        }
        if (evt.x >= 160 && evt.x <= 180) {
            //@ts-ignore
            document.getElementById('anverso')?.innerHTML = "<br>Codigo de barras y cifrado";
        }
        if (evt.x >= 270 && evt.x <= 300) {
            //@ts-ignore
            document.getElementById('anverso')?.innerHTML = "<br>Codigo de QR";
        }
        if (evt.x >= 141 && evt.x <= 165) {
            //@ts-ignore
            document.getElementById('anverso')?.innerHTML = "<br>Firma digitalizada";
        }
        if (evt.x >= 192 && evt.x <= 230) {
            //@ts-ignore
            document.getElementById('anverso')?.innerHTML = "<br>Zona de lectura mecanica";
        }
    }

    nextMorph() {
        this.morphGroupModel = this.nextMorphStep[this.morphGroupModel]
    }
    clean(){
      this.partido = [];
      localStorage.removeItem("Partido");
    }

    addLocal(){
      NotifyPersonal("Success","Puedes cerar y continuar");
      localStorage.setItem("Partido", JSON.stringify(this.partido));
    }

    result(){
      let data = localStorage.getItem("Partido");
      this.partResult = data
      this.arrayComplete = [];
      this.count = 0;
      this.newArray();
    }

    newArray(){
      let data = JSON.parse(this.partResult);
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
       if (element == 'PT' || element == 'PAN' || element == 'MORENA' || element == 'VERDE' || element == 'PRI' || element == 'PRD') {
          this.arrayComplete.push({name: element, icon: 'error'});
       }else{
          this.arrayComplete.push({name: element, icon: 'check'});
          this.count++;
       }
      }
    }

}
</script>

<style>
.img {
    width: 100%;
}

.imagenes {
    max-width: 50%;
}
.container {
  max-width: 50%;
  max-height: 70%;
  min-width: 400px;
  min-height: 600px;
  width: 100%;
  height: 100%;
}
.pdfs{
max-width: 50%;
}
</style>
