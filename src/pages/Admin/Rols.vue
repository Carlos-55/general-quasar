<template>
<div id="Rols">

  <div>
    <!-- <q-img :src="data[8].icons[0].light"></q-img>
    {{this.data[8].icons[0].night}} -->
  </div>



</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Rols extends Vue {
  data : any = {};

  async mounted() {
    this.$q.dark.set(true);
    // this.data = await Vue.prototype.$axios.get(`page/all-service`);
  }
}
</script>

<style>
img {
    display: block;
    margin: auto;
    padding: 4em;
}
</style>
