import { types } from '../types/types';
import firebase from 'firebase/app';
import { googleAuthProvider } from '../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from './ui';
import Swal from 'sweetalert2';

export const startLoginWithEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(uiStartLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(uiFinishLoading());
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error!',
					text: err.message,
					icon: 'error',
					confirmButtonText: 'Cool',
				});
				dispatch(uiFinishLoading());
			});
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error!',
					text: err.message,
					icon: 'error',
					confirmButtonText: 'Cool',
				});
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => dispatch(login(user.uid, user.displayName)));
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout,
});
