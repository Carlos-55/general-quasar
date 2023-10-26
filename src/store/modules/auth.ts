import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import Vue from 'vue';
import { IUser } from '../../models/user';
import { ILogin } from '../../models/login';

@Module({
	name: 'AuthStoreModule',
	namespaced: true,
})
export class AuthStoreModule extends VuexModule {
	public token: string = '';
	public userLogged: IUser = {};
	public loader: boolean = false;
	public buttonSelect: string = '';

	@Mutation
	LOGIN(token: string) {
		this.token = token;
	}
	@Mutation
	LOGOUT() {
		this.token = '';
	}
	@Mutation
	SET(user: IUser) {
		this.userLogged = user;
	}
	@Mutation
	SETBUTTONSELECT(selected: string){
		this.buttonSelect = selected;
	}

	@Action
	async login(auth: ILogin) {
		const res = await Vue.prototype.$axios.post('auth/login', auth);

		if (res && res.token) {
			this.context.commit('LOGIN', res.token);
			this.context.commit('SET', res.user);
		}
		return res.token || null
	}
	@Action
	logout() {
		this.context.commit('LOGOUT');
	}
	get isAuth() {
		return this.token != ''
	}


	get namePage(){
		switch (this.buttonSelect) {
			case 'publications':
				return 'Publicaciones';
			case 'publication':
				return 'Publicaciones';
			case 'payments':
				return 'Pagos';
			case 'payment':
				return 'Pagos';
			case 'ratings':
				return 'Calificaciones';
			case 'gears':
				return 'Calificaciones';
			case 'account':
				return 'Cuenta';
			case 'raiting':
				return 'Cuenta';
			default:
				return '';
		}
	}

	get userPhoto() {
		if (!this.token) return '';
		return this.userLogged ? this.userLogged.photo : '';
	}
	get userEmail() {
		if (!this.token) return '';
		return this.userLogged ? this.userLogged.email : '';
	}
	get userName() {
		if (!this.token) return '';
		return this.userLogged ? this.userLogged.name : '';
	}
}
