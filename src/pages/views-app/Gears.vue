<template>
    
    <div class="col-md-6 col-12">
        <div class="row justify-center items-center ">
            <div align="center" class="q-mt-lg text-h5 text-weight-bolder">
            </div>
        </div>

        <div align="center" class="q-mt-xs text-h6">
            Esta es la cuenta de: <br>
            <div class="q-mt-lg text-h6 text-weight-bolder">
                Nombre completo del usuario logeado <br>
                correodelusuariologeado@gmail.com
            </div>
        </div>

        <div class="fit justify-center items-center">

            <div class="col-10 col-sm-5 col-md-3 col-lg-2">
                <div align="Center">
                    <div class="q-pt-xl">
                        <q-btn unelevated class="q-my-sm text-black"  color="amber-7">Continuar</q-btn>
                    </div>
                    <div class="q-pt-none">
                        <q-btn unelevated class="q-my-sm text-black" color="grey-4">Inicio</q-btn>
                    </div>
                    <div align="center" class="q-pt-md text-deep-orange text-weight-bolder text-h6" color="secondary">
                    <img src="../../assets/school_logo.svg">
                     </div>
                    
                </div>
            </div>
        </div>
    </div>
  
  </template>
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  //@ts-ignore
  @Component({
    components : {}
  }) 
  export default class ViewGears extends Vue {
    gael: Array<any> = ["asddf","gae","mart","das","HTML", "CSS"];
    
    
    async mounted() {
      ;
      
    }
        
    
  }
  </script>
  <style>
  
  </style>
  