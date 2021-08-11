import { types } from '../types/types';

export const startLoginWithEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, 'cesar'));
		}, 3500);
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => ({
	type: types.logout,
});
