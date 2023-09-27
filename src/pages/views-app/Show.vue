<template>
    <div class="col-md-6 col-12">
        <div class="text-black">
            <q-item >
                <div class="">
                    <q-item-section></q-item-section>
                    <q-item-section class="text-subtitle2 text-weight-bold">Titulo de la publicaion</q-item-section>
                    <q-item-section class="" >Espacio</q-item-section>
                    <q-item-section class="">26/sep/2023</q-item-section>
                </div>
                <q-item-section thumbnail class="col-5 q-mx-xl">  
                     <q-btn class="q-mx-xl" color="amber-7" text-color="black" icon="attach_file" rounded />
                </q-item-section>

            </q-item>

            <div class="q-ma-lg">Mucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho Mucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho Mucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho TextoMucho Texto</div>
            
                 <q-btn class="q-ma-lg" color="primary" text-color="white" label="Leido" />
                
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

//@ts-ignore
@Component({
    components: {}
})
export default class ShowPublication extends Vue {
    gael: Array<any> = ["asddf", "gae", "mart", "das", "HTML", "CSS"];
    articleFlag: boolean = false


    async mounted() {
        console.log('gael');

    }




}
</script>
<style></style>
  