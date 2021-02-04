<template>
  <Modal
    :btnTitle="''"
    :title="agend.id ? 'titles.updated' : 'titles.creation'"
    @onConfirm="onSubmit"
    v-model="dialog"
    @onCancel="onCancel"
    :loader="agendState.loader"
    :btnProps="{ dense: true, fab: true, color: 'primary', icon: 'add' }"
  >
    <FormFlex
      :fields="fields"
      :loader="agendState.loader"
      :model="agend"
      @onValidation="formValid = $event"
      @onSubmit="onSubmit"
    />
  </Modal>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Emit,
  PropSync,
  Model
} from 'vue-property-decorator';
import FormFlex from '../../components/FormFlex.vue';
import Modal from '../../components/Modal.vue';
import { getModule } from 'vuex-module-decorators';
import { ValidationsForm } from '../../helpers/validations';
import { AgendaStoreModule } from '../../store/modules/agenda';
import { IAgenda } from 'src/models/agenda';

@Component({
  components: {
    FormFlex,
    Modal
  }
})
export default class FormAgends extends Vue {
  @Prop({ type: Boolean, required: true }) value!: boolean;
  dialog = false;
  formValid: boolean = false;
  agendState = getModule(AgendaStoreModule, this.$store);
  agend: IAgenda = {};

  @Emit('input')
  async onCancel() {
    this.dialog = false;
    return false;
  }
  @Watch('value')
  onChange(state: boolean, newStatus: boolean) {
    this.dialog = state;
  }
  async mounted() {
    this.dialog = this.value;
    this.agend = Object.assign({}, this.agendState.selectedAgenda);
  }
  @Watch('agendState.selectedAgenda')
  onSelectedAgend(status: any, newStatus: IAgenda) {
    this.agend = Object.assign({}, status);
  }

  async onSubmit() {
    if (!this.formValid) {
      return;
    }
    if (this.agend.id) {
      const res = await this.agendState.update(this.agend);
      this.onCancel();
    } else {
      const res = await this.agendState.create({ ...this.agend });
      this.onCancel();
    }
  }
  /**
   * title
        details
        date
        time
        duration
        bgcolor
        icon
   */
  fields = [
    {
      type: 'text',
      label: 'forms.agend.title',
      hint: 'forms.agend.title',
      key: 'title',
      field: { class: 'col-12 col-md-6 q-px-sm q-py-sm' },
      props: {},
      rules: [...ValidationsForm.reqAndTree]
    },
    {
      type: 'text',
      label: 'forms.agend.details',
      key: 'details',
      field: {
        class: 'col-12 col-md-6 q-px-sm q-py-sm'
      },
      rules: [...ValidationsForm.reqAndTree],
      props: {}
    },
    {
      type: 'text',
      hint: 'forms.agend.date',
      key: 'date',
      field: {
        class: 'col-12 col-md-6 q-px-sm q-py-sm'
      },
      rules: [],
      props: {
        type: 'date'
      }
    },
    {
      type: 'file',
      label: 'forms.agend.time',
      key: 'time',
      field: {
        class: 'col-12 col-md-6 q-px-sm q-py-sm'
      },
      props: {
          type: 'time'
      }
    }
  ];
}
</script>

<style lang="scss" scope></style>
