<template>
	<div id="Index">
		  <div class="q-pa-md">
				<div class="q-pb-sm">
				Model: {{ days }}
				</div>

				<q-date v-model="days" multiple />
				--------------
				<q-date v-model="model" range />
				Model: {{ model }}
			</div>
			</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
	days = [ '2019/02/01', '2019/02/10' ]
	model = { from: '2020/07/08', to: '2020/07/17' }

}
</script>

<style lang="scss" scope></style>
