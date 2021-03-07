import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import Vue from 'vue';
import { IAgenda } from '../../models/agenda';
import { oflineItems } from '../../helpers/helpers';

@Module({
	name: 'PartsStoreModule',
	namespaced: true,
})
export class PartsStoreModule extends VuexModule {
	public selectparts: any = {};
	public parts: any[] = [];
	public loader: boolean = false;
	@Mutation
	LIST(parts: any[]) {
		this.parts = [...parts];
	}
	@Mutation
	ADD(parts: any) {
		this.parts = [...this.parts, parts];
	}
	@Mutation
	LOADER(loader: boolean) {
		this.loader = loader;
	}
	@Mutation
	UPDATE(parts: any) {
		const newparts = this.parts.filter(s => s.id !== parts.id);
		this.parts = [...newparts, parts];
	}
	@Mutation
	REMOVE(user: any) {
		this.parts = this.parts.filter(s => s.id !== user.id);
	}
	@Mutation
	SET(parts?: any) {
		// @ts-ignore
		this.selectedAgenda = Object.assign({}, parts ? { ...parts } : parts);
	}
}
