<template>
  <div class="col-md-6 col-12">
    <div v-if="articleFlag">
      <ShowPublication @onClose="closeFlag"></ShowPublication>
    </div>
    <div v-if="publications">
      <div v-if="$q.screen.width > 900">

        <div id="q-app" style="min-height: 100vh;">

          <div class="q-pa-md row items-start q-gutter-md">
            <div v-for="item in gael">
              <q-card class="my-card" clickable v-ripple @click="showArticle()">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                  <div class="text-h6">Titulo de la publicacion</div>
                  <div class="text-subtitle2">25/05/2023</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  {{ 'CONTENIDO DE LA PUBLICACION Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }}
                </q-card-section>
              </q-card>
            </div>

          </div>
        </div>
      </div>
      <div v-if="$q.screen.width < 900">
        <div v-for="item in gael">
          <q-item clickable v-ripple @click="showArticle()">
            <q-item-section avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
              </q-avatar>
            </q-item-section>
            <div class="">
              <q-item-section></q-item-section>
              <q-item-section class="text-subtitle2 text-weight-bold">Titulo de la publicacion</q-item-section>
              <q-item-section>Espacio</q-item-section>
              <q-item-section>26/sep/2023</q-item-section>
            </div>
          </q-item>
        </div>
      </div>

    </div>

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShowPublication from '../views-app/Show.vue'
//@ts-ignore
@Component({
  components: {
    ShowPublication,
  }
})
export default class ViewPublications extends Vue {
  gael: Array<any> = ["asddf", "gae", "mart", "das", "HTML", "CSS"];
  articleFlag: boolean = false
  publications: boolean = true



  async mounted() {

  }

  showArticle() {
    this.publications = false
    this.articleFlag = !this.articleFlag
  }

  closeFlag(closeShow: boolean) {
    this.publications = true
    this.articleFlag = closeShow
  }



}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

  