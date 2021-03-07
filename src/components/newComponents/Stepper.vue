<template>
<div id="Stepper">
    <q-stepper v-model="step" ref="stepper" animated active-color="purple" inactive-color="purple-1">
        <q-step :name="1" title="Conoce tu INE" icon="settings" :done="step > 1">
            <CredentialFront />
        </q-step>

        <q-step :name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="step > 2">
            <div class="text-h5"> Partidos politicos </div>
            <div class="q-pa-md">
                <div class="q-gutter-sm">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div>
                                    <q-avatar size="100px" square>
                                        <img src="../../assets/partidos/prd.png">
                                    </q-avatar>
                                </div>
                                <div>
                                    <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                              <div>
                                <q-avatar size="100px" square>
                                    <img src="../../assets/partidos/pan.png">
                                </q-avatar>
                              </div>
                              <div>
                                 <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}
                              </div>
                            </div>
                        </div>
                        <div class="col">
                          <div class="row">
                            <div>
                              <q-avatar size="100px" square>
                                <img src="../../assets/partidos/pri.png">
                            </q-avatar>
                            </div>
                            <div>
                               <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}
                            </div>
                          </div>
                        </div>
                        <div class="col">
                            <div class="row">
                            <q-avatar size="100px" square>
                                <img src="../../assets/partidos/movimiento.png">
                            </q-avatar>
                            </div>
                            <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                        </div>
                        <div class="col">
                           <div class="row">
                             <q-avatar size="100px" square>
                                <img src="../../assets/partidos/morena.png">
                            </q-avatar>
                           </div>
                           <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                        </div>
                        <div class="col">
                            <div class="row">
                            <q-avatar size="100px" square>
                                <img src="../../assets/partidos/pes.png">
                            </q-avatar>

                            </div>
                            <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                        </div>
                        <div class="col">
                           <div  class="row">
                            <div>
                             <q-avatar size="100px" square>
                                <img src="../../assets/partidos/pt.png">
                            </q-avatar>
                            </div>
                            <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                           </div>
                        </div>
                        <div class="col">
                           <div class="row">
                            <q-avatar size="100px" square>
                                <img src="../../assets/partidos/rsp.png">
                            </q-avatar>
                           </div>
                           <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                        </div>
                        <div class="col">
                            <div class="row">
                            <div>
                              <q-avatar size="100px" square>
                                <img src="../../assets/partidos/social.png">
                            </q-avatar>
                            </div>
                            <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                            </div>
                        </div>
                        <div class="col">
                           <div class="row">
                            <div >
                               <q-avatar size="100px" square>
                                <img src="../../assets/partidos/verde.png">
                            </q-avatar>
                            </div>
                            <div> <q-checkbox keep-color v-model="teal" label="Teal" color="teal" />{{teal}}</div>
                           </div>
                        </div>
                    </div>
                    <!--
            <q-checkbox keep-color v-model="orange" label="Orange" color="orange" />{{orange}}
            <q-checkbox keep-color v-model="red" label="Red" color="red" />{{red}}
            <q-checkbox keep-color v-model="cyan" label="Cyan" color="cyan" />  <q-badge color="cyan">{{cyan}}</q-badge>-->
                </div>
            </div>
        </q-step>

        <q-step :name="3" title="Ad template" icon="assignment" :done="step > 3">
            This step won't show up because it is disabled.
        </q-step>

        <q-step :name="4" title="Create an ad" icon="add_comment">
            Try out different ad text to see what brings in the most customers, and learn how
            to enhance your ads using features like ad extensions. If you run into any
            problems with your ads, find out how to tell if they're running and how to resolve
            approval issues.
        </q-step>

        <template v-slot:navigation>
            <q-stepper-navigation>
                <q-btn @click="siguiente" color="purple" :label="step === 4 ? 'Finalizar' : 'Continuar'" />
                <q-btn v-if="step > 1" flat color="purple" @click="anterior" label="Regresar" class="q-ml-sm" />
            </q-stepper-navigation>
        </template>
    </q-stepper>
</div>
</template>

<script lang="ts">
import {
    PartsStoreModule
} from 'src/store/modules/partidos';
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import {
    getModule
} from 'vuex-module-decorators';
import CredentialFront from '../project-game/CredentialFront.vue';
@Component({
    components: {
        CredentialFront
    }
})
export default class Stepper extends Vue {
    partsSelect = getModule(PartsStoreModule, this.$store);
    step = 1;
    teal = true
    orange = false
    red = false
    cyan = true

    siguiente() {
        //@ts-ignore
        this.$refs.stepper.next();
    }

    anterior() {
        //@ts-ignore
        this.$refs.stepper.previous()
    }

}
</script>

<style>
#Stepper{
  width: 100%;
}
</style>
