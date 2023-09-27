<template>
    
    <div class="col-md-6 col-12">
        <div class="q-ma-md">Consulta la boleta de:
     
        </div>
    
        <q-item clickable v-ripple>
        <q-item-section class="q-mr-xs" avatar>
          <q-avatar rounded size="70px">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <div>
            <q-item-section class="text-h6 text-weight-bold " >Pedro juaquin de la cueva Hernández </q-item-section>
        </div>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="q-mr-xs" avatar>
          <q-avatar rounded size="70px">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <div>
            <q-item-section class="text-h6 text-weight-bold " >Pedro juaquin de la cueva Hernández </q-item-section>
        </div>
      </q-item> 
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
  import { Component, Prop, Vue } from 'vue-property-decorator';

  //@ts-ignore
  @Component({
    components : {}
  }) 
  export default class ViewRaiting extends Vue {
    gael: Array<any> = ["asddf","gae","mart","das","HTML", "CSS"];
    
    
    async mounted() {
      ;
      
    }
        
    
  }
  </script>
  <style>
  
  </style>
  