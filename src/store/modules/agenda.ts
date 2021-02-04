import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import Vue from 'vue';
import { IAgenda } from '../../models/agenda';
import { oflineItems } from '../../helpers/helpers';

@Module({
	name: 'AgendaStoreModule',
	namespaced: true,
})
export class AgendaStoreModule extends VuexModule {
	public selectedAgenda: IAgenda = {};
	public agends: IAgenda[] = [];
	public loader: boolean = false;
	@Mutation
	LIST(agends: IAgenda[]) {
		this.agends = [...agends];
	}
	@Mutation
	ADD(agends: IAgenda) {
		this.agends = [...this.agends, agends];
	}
	@Mutation
	LOADER(loader: boolean) {
		this.loader = loader;
	}
	@Mutation
	UPDATE(agends: IAgenda) {
		const newAgends = this.agends.filter(s => s.id !== agends.id);
		this.agends = [...newAgends, agends];
	}
	@Mutation
	REMOVE(user: IAgenda) {
		this.agends = this.agends.filter(s => s.id !== user.id);
	}
	@Mutation
	SET(agends?: IAgenda) {
		// @ts-ignore
		this.selectedAgenda = Object.assign({}, agends ? { ...agends } : agends);
	}
	@Action
	async getAll() {
		this.context.commit('LOADER', true);
		try {
			if (navigator.onLine) {
				const res = await Vue.prototype.$axios.get('users');
				this.context.commit('LIST', res);
			}
		} finally {
			this.context.commit('SET');
			this.context.commit('LOADER', false);
		}
	}
	@Action
	async getById(item: IAgenda) {
		this.context.commit('LOADER', true);
		try {
			if (navigator.onLine) {
				const res = await Vue.prototype.$axios.get(`users/${item.id}`);
				this.context.commit('SET', res);
			}
		} finally {
			this.context.commit('LOADER', false);
		}
	}
	@Action
	async create(item: IAgenda) {
		console.log(item);

		this.context.commit('LOADER', true);
		try {
			if (navigator.onLine) {
				const res = await Vue.prototype.$axios.post('users', item);
				this.context.commit('ADD', res);
			} else {
				oflineItems(`users`, 'post', item);
			}
			this.context.commit('SET');
		} finally {
			this.context.commit('LOADER', false);
		}
	}
	@Action
	async update(item: IAgenda) {
		this.context.commit('LOADER', true);
		try {
			if (navigator.onLine) {
				const res = await Vue.prototype.$axios.put(
					`users/${item.id}`,
					item
				);
				this.context.commit('UPDATE', res);
			} else {
				oflineItems(`users/${item.id}`, 'put', item);
			}
			this.context.commit('SET');
		} finally {
			this.context.commit('LOADER', false);
		}
	}
	@Action
	async delete(item: IAgenda) {
		this.context.commit('LOADER', true);
		try {
			if (navigator.onLine) {
				const res = await Vue.prototype.$axios.delete(
					`users/${item.id}`
				);
				this.context.commit('REMOVE', item);
			} else {
				oflineItems(`users/${item.id}`, 'delete', null);
			}
			this.context.commit('SET');
		} finally {
			this.context.commit('LOADER', false);
		}
	}
}
