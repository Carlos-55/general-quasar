<template>
    
    <div class="col-md-6 col-12 bg-red">
      <div>gael</div>
      <div>gael</div>
      <div>gael</div>
      <div>
        
      </div>
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
      
      <div>gael</div>



      



    </div>
  
  </template>
  <script lang="ts">
  // import { Component, Prop, Vue, Watch, Emit, PropSync, Model } from 'vue-property-decorator';
  import { Component, Prop, Vue } from 'vue-property-decorator';

  //@ts-ignore
  @Component({
    components : {}
  }) 
  export default class ViewPublications extends Vue {
    
    async mounted() {
      console.log('gael');
      
    }
        
    
  }
  </script>
  <style>
  
  </style>
  