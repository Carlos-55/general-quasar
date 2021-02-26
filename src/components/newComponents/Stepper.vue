<template>
  <div>
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      active-color="purple"
      inactive-color="purple-1"
    >
      <q-step
        :name="1"
        title="Conoce tu INE"
        icon="settings"
        :done="step > 1"
      >
       <CredentialFront/>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Ad template"
        icon="assignment"
         :done="step > 3"
      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="purple" :label="step === 4 ? 'Finalizar' : 'Continuar'" />
          <q-btn v-if="step > 1" flat color="purple" @click="$refs.stepper.previous()" label="Regresar" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CredentialFront from '../project-game/CredentialFront.vue';
@Component({
  components: {
    CredentialFront
  }
})
export default class Stepper extends Vue {
  step: number = 1;
}
</script>
<style>

</style>
