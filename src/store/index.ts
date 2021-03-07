import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
// import example from './module-example'
import { DATASTORAGE } from '../helpers/configs';
import { AuthStoreModule } from "./modules/auth";
import { AgendaStoreModule } from "./modules/agenda";
import { UserStoreModule } from "./modules/user";
import { GlobalStoreModule } from "./modules/global";
import { PartsStoreModule } from './modules/partidos';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence<any>({
	storage: window.localStorage,
	key: DATASTORAGE
});

export default new Vuex.Store({
	modules: {
		AuthStoreModule,
		UserStoreModule,
		GlobalStoreModule,
		AgendaStoreModule,
    PartsStoreModule
	},

	// @ts-ignore
	strict: process.env.DEV === 'true',
	plugins: [vuexLocal.plugin]
});
