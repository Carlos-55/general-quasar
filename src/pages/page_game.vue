<template>
  <div id="PageGame">

  <div class="q-pa-md" v-if="$q.screen.xl || $q.screen.md">
    <Stepper></Stepper>
  </div>
  <div class="q-pa-md" v-else>
    <StepperResponsive/>
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Stepper from '../components/newComponents/Stepper.vue';
import StepperResponsive from '../components/newComponents/StepperResponsive.vue';
@Component({
  components: {
    Stepper,
    StepperResponsive
  }
})
export default class PageGame extends Vue {
  step: number = 1;
}
</script>


<style>
#PageGame{
  height: 100vh;
  width: 100%;
  background-image: url('../assets/img/fond.jpg');
  background-size: cover;
}
</style>
