<template>
<div class="col-md-6 col-12">
    <div class="q-ma-md text-h6">Consulta la boleta de:

    </div>
    <div v-if="$q.screen.width > 900">

        <div id="q-app" style="min-height: 100vh;">

            <div class="q-pa-md row items-start q-gutter-md">
                <div v-for="item in gael">
                    <q-card class="my-card" clickable>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">

                        <q-card-section>
                            <div class="text-h6">Pedro Juaquin Gonzales Hernandez</div>
                            <div class="text-subtitle2">25/05/2023</div>
                        </q-card-section>
                    </q-card>
                </div>

            </div>
        </div>
    </div>

    <div v-if="$q.screen.width < 900">
        <q-item clickable v-ripple>
            <q-item-section class="q-mr-xs" avatar>
                <q-avatar rounded size="70px">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                </q-avatar>
            </q-item-section>
            <div>
                <q-item-section class="text-h6 text-weight-bold ">Pedro juaquin de la cueva Hernández </q-item-section>
            </div>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section class="q-mr-xs" avatar>
                <q-avatar rounded size="70px">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                </q-avatar>
            </q-item-section>
            <div>
                <q-item-section class="text-h6 text-weight-bold ">Pedro juaquin de la cueva Hernández </q-item-section>
            </div>
        </q-item>

    </div>

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
    <div class="col-12" align="center">
        <q-btn icon-right="logout" color="amber-10" no-caps @click="logout"> Cerrar sesion </q-btn>
    </div>

</div>
</template>

  
<script lang="ts">
import { AuthStoreModule } from 'src/store/modules/auth';
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

//@ts-ignore
@Component({
    components: {}
})
export default class ViewRaiting extends Vue {
    authStore = getModule(AuthStoreModule, this.$store)
    gael: Array < any > = ["asddf", "gae", "mart", "das", "HTML", "CSS"];

    async mounted() {
        
    }

    logout(){
        // this.authStore.logout()
        this.$router.push("/")
    }

}
</script>
  
<style lang="sass" scoped>
.my-card 
  width: 100% 
  max-width: 250px
</style>
