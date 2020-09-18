export interface IUser {
	id?: string;
	name?: string;
	lasName?: string
	password?: string;
	email?: string;
	photo?: string;
	active?: boolean;
	rol?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
