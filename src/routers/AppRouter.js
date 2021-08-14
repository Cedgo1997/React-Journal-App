import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [{ checking, isLoggedIn }, setState] = useState({
		checking: true,
		isLoggedIn: false,
	});

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setState((state) => ({ ...state, isLoggedIn: true }));
			} else {
				setState((state) => ({ ...state, isLoggedIn: false }));
			}
			setState((state) => ({ ...state, checking: false }));
		});
	}, [dispatch, setState]);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path='/auth' component={AuthRouter} />
						<Route exact path='/' component={JournalScreen} />
						<Redirect to='/auth/login' />
					</Switch>
				</div>
			</Router>
		</div>
	);
};
